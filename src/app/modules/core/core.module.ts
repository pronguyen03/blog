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
import { ConsoleWriter, ErrorHandlingService, InitLoggingAndWriters, LoggingService, LogglyWriter } from 'src/app/services';
import { GOOGLE_ANALYTICS_TRACKING_ID, LOGGLY_TOKEN } from '../../../../configuration';

export const CORE_IMPORTS = []
    
if (LOGGLY_TOKEN) {
  CORE_IMPORTS.push(NgxLogglyModule.forRoot())
}

if (GOOGLE_ANALYTICS_TRACKING_ID) {
  CORE_IMPORTS.push(
    NgxGoogleAnalyticsModule.forRoot(
      GOOGLE_ANALYTICS_TRACKING_ID
    )
  )
}

export const CORE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    deps: [LoggingService, ConsoleWriter, LogglyWriter],
    multi: true,
    useFactory: InitLoggingAndWriters
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
    ...CORE_IMPORTS
  ],
  providers: [
    ...CORE_PROVIDERS
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
}
