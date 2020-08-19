---
title: Angular Trick - Load config từ file json trong Angular
description: Trong bài này mình sẽ chia sẻ cách load config động từ file json trong Angular.
published: true
keywords: angular, compress image, nen hinh anh, giam dung luong hinh anh
categories: angular
date: 2020-08-19
image: https://nhannguyendacoder.com/assets/images/angular-load-config-tu-file-json-trong-angular/dynamic-json-configs.png
---

# [Angular Trick] Load config từ file json trong Angular

![Load config từ file json trong Angular](../assets/images/angular-load-config-tu-file-json-trong-angular/dynamic-json-configs.png)

Trong bài này mình sẽ chia sẻ cách load config động từ file json trong Angular.

Link demo trên [stackblitz](https://stackblitz.com/edit/angular-load-configs-from-json?file=src/app/app.component.ts)

## Use cases

Ứng dụng Angular sẽ load các config từ file `config.json` trong thư mục assets. Mỗi môi trường khác nhau như development, test, staging, production sẽ có một file config tương ứng được thay thế trong quá trình deploy (không dùng fileReplacements option trong `angular.json`)

Khi bạn muốn thay đổi config (rest url, api key, debug mode,...) thì chỉ cần update file `config.json` ngay trên server mà không cần phải build lại app, khi reload lại trang là các config mới sẽ được cập nhật.

Tình huống thực tế mà mình gặp là khi app trên production có bug, cần bật mode debug lên hay backend thay đổi public url thì chỉ cần cập nhật lại file `config.json` mà không cần phải build lại app.

## Nội dung

Đầu tiên chúng ta sẽ tạo một constant để lưu đường dẫn file config để sau này có thay đổi thì chỉ cần đổi một nơi thôi. 

```typescript
// file: constant.ts
export const CONFIG_FILE = 'assets/config.json'
```

Tiếp theo khai báo một interface để mô tả cấu trúc file config

```typescript
// file: i-configuration.ts

// logging configs
export interface ILoggingConfiguration {
    sendToCentralizedServer: boolean;
    sendToConsole: boolean;
    logentriesToken: string;
    logglyToken: string;
}

// rest api and media configs
export interface IRESTConfiguration {
    url: string;
    mediaURL: string;
}

// firebase configs
export interface IFirebaseConfiguration {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
}

export interface IConfiguration {
    applicationName: string;
    version: string;
    production: boolean;
    debug: boolean;
    rest: IRESTConfiguration;
    firebase: IFirebaseConfiguration;
    logging: ILoggingConfiguration;
}

```

Khai báo interface cho Configuration Service. Ở đây mình dùng interface để abstract configuration service, user chỉ cần biết tới `IConfigurationService` mà không cần quan tâm tới implementation của nó là `ConfigurationService`, sau này bạn cũng có thể đổi `ConfigurationService` thành `MockConfigurationService` để test chẳng hạn. Các implementation của `IConfigurationService` phải cung cấp property `readonly configs$: Observable<IConfiguration>` để client đăng ký nhận config, và method `initialize()` để khởi tạo config.

```typescript
// file: i-configuration.service.ts
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigurationService } from "./configuration.service";
import { IConfiguration } from "./i-configuration";

@Injectable({
    providedIn: "root",
    useClass: ConfigurationService
})
export abstract class IConfigurationService {
    // client will listen to this property
    readonly configs$: Observable<IConfiguration>;
    // initialize configs
    abstract initialize();
}
```

Chúng ta sẽ dùng `HttpClient` để đọc file json. Có một vấn đề là đôi khi bạn không muốn request tới file config phải đi qua các interceptor. Vì vậy mình đã viết một wrapper class để tạo các http request không đi qua các interceptor.

```typescript
// file: no-interceptor-http-client.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

/**
 * This is to make a request that are not going through interceptors chains
 * related to comment https://github.com/angular/angular/issues/20203#issuecomment-368680437
 */
@Injectable({
    providedIn: 'root'
})
export class NoInterceptorHttpClient extends HttpClient {
    constructor(handler: HttpBackend) {
        super(handler);
    }
}
```

Tiếp theo chúng ta sẽ khai báo một implementation của interface `IConfigurationService` là `ConfigurationService`. Đây là class sẽ thực hiện việc load config từ file json và trả về cho user.

```typescript
// file: configuration.service.ts
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, throwError } from "rxjs";
import { IConfigurationService } from "./i-configuration.service";
import { IConfiguration } from "./i-configuration";
import { NoInterceptorHttpClient } from "./no-interceptor-http-client";
import { CONFIG_FILE } from "./constant";

@Injectable()
export class ConfigurationService implements IConfigurationService {
    private configs = new ReplaySubject<IConfiguration>(1);
    // public api for clients
    readonly configs$: Observable<IConfiguration> = this.configs.asObservable();

    constructor(private httpClient: NoInterceptorHttpClient) {}

    // read config file
    initialize() {
        this.httpClient.get<IConfiguration>(CONFIG_FILE).subscribe(
            configs => this.configs.next(configs),
            error => {
                console.error("Failed to load app configs.");
                throwError(error);
            }
        );
    }
}

```

Chúng ta sẽ load config đầu tiên khi app bắt đầu chạy. Vì vậy cần khai báo một hàm factory cho việc đó.

```typescript
// file: preload-config.factory.ts
import { IConfigurationService } from './i-configuration.service';

export function PreloadConfigFactory(configuration: IConfigurationService) {
    return () => configuration.initialize();
}
```

## Sử dụng configuration service

Đầu tiên hãy tạo file `assets/config.json` với nội dung như sau

```json
{
    "applicationName": "My App",
    "production": false,
    "debug": true,
    "rest": {
        "url": "https://dev-rest.abc.com/api/v1",
        "mediaURL": "https://dev-media.abc.com"
    },
    "firebaseConfigs": {
        "apiKey": "apiKey",
        "authDomain": "authDomain",
        "databaseURL": "databaseURL",
        "projectId": "projectId",
        "storageBucket": "storageBucket",
        "messagingSenderId": "messagingSenderId"
    },
    "logging": {
        "sendToCentralizedServer": false,
        "sendToConsole": true,
        "logentriesToken": "logentriesToken",
        "logglyToken": "logglyToken"
    }
}
```

Khai báo load config factory trong `AppModule`. Các bạn lưu ý chúng ta chỉ làm việc với `IConfigurationService`, không phải implementation của nó là `ConfigurationService`.

```typescript
// file: app.module.ts
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IConfigurationService } from "./i-configuration.service";
import { PreloadConfigFactory } from "./preload-config.factory";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:      [ BrowserModule, HttpClientModule ],
    declarations: [ AppComponent ], 
    bootstrap:    [ AppComponent ],
    providers: [
        {
            provide: APP_INITIALIZER,
            deps: [IConfigurationService],
            multi: true,
            useFactory: PreloadConfigFactory
        },
    ]
})
export class AppModule { }
```

Inject `IConfigurationService` vào `AppComponent` và sử dụng thôi nào.

```typescript
// file: app.component.ts
import { Component, VERSION } from '@angular/core';
import { IConfigurationService } from "./i-configuration.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    constructor(public config: IConfigurationService) {}
}

```

```html
<!--file: app.component.html-->
<h3>The configs loaded from config.json file: </h3>
<pre>
    {{(config.configs$ | async) | json}}
</pre>
```

## Load config từ file json ở file main.ts

Bạn cũng có thể load file config ngay ở file `main.ts`. Ở đây mình cần chạy hàm `enableProdMode()` cho môi trường production thì làm như sau: 

```typescript
// file: main.ts
import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { IConfiguration } from './app/i-configuration';
import { CONFIG_FILE } from './app/constant';

(async () => {
    try {
        // this line also run each time user reload the browser
        let configs: IConfiguration = await fetch(CONFIG_FILE).then(res => res.json())

        if (configs.production) {
            enableProdMode();
        }
        
        platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch((err) => console.error(err));
    } catch (error) {
        console.error('Initializing error', error)
    }
})()
```

Bài viết này có tham khảo nội dung từ các nguồn sau: 
- https://leanpub.com/angular-architecture-the-unofficial-guide
- https://github.com/angular/angular/issues/20203#issuecomment-368680437
- https://stackoverflow.com/questions/42110817/load-config-json-file-in-angular-2/42111501

Cảm ơn các bạn đã theo dõi bài viết, mong nhận được góp ý từ mọi người.



