import { CommonModule } from '@angular/common';
import { 
  APP_INITIALIZER, 
  ErrorHandler, 
  NgModule, 
  Optional, 
  SkipSelf 
} from '@angular/core';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { NgxLogglyModule } from 'ngx-loggly-logger';

import { 
  ConsoleWriter, 
  ErrorHandlingService, 
  IConfigurationService, 
  ILoggingService, 
  InitLoggingAndWriters, 
  LogglyWriter, 
  PreloadConfigFactory 
} from 'src/app/services';

export const CROSS_CUTTING = [
  {
    provide: APP_INITIALIZER,
    deps: [ILoggingService, ConsoleWriter, LogglyWriter],
    multi: true,
    useFactory: InitLoggingAndWriters
  },
  {
    provide: APP_INITIALIZER,
    deps: [IConfigurationService],
    multi: true,
    useFactory: PreloadConfigFactory
  },
  {
    provide: ErrorHandler,
    useClass: ErrorHandlingService
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxLogglyModule.forRoot(),
    NgxGoogleAnalyticsModule.forRoot('UA-57017162-2')
  ],
  providers: [
    ...CROSS_CUTTING
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
}
