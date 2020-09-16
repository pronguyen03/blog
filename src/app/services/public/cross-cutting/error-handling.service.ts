import { ErrorHandler, Injectable } from '@angular/core';
import { ILoggingData } from 'src/app/models';
import { ILoggingService } from './i-logging.service';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {
    constructor(private loggingService: ILoggingService) {}

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