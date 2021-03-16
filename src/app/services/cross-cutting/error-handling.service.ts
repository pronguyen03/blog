import { ErrorHandler, Injectable } from '@angular/core';
import { ILoggingData } from 'src/app/models';
import { LoggingService } from './logging/logging.service';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {
    constructor(private loggingService: LoggingService) {}

    handleError(error) {
        console.info('Handling error with ErrorHandlingService')

        this.handleErrorFunc({
            message: error?.message || 'unexpected error',
            errorName: error?.name || 'Error',
            stack: error?.stack,
        })
    }

    private handleErrorFunc(errorData: ILoggingData) {
        this.loggingService.error(errorData)
    }
}