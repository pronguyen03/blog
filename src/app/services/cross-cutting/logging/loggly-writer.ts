import { Injectable, Optional } from '@angular/core';
import { LogglyService } from 'ngx-loggly-logger';
import { LogWriter } from './log-writer';
import { ILoggingService } from '../i-logging.service';
import { IConfigurationService } from '../i-configuration.service';
import { ILoggingFullData } from 'src/app/models';
import { environment } from 'src/environments/environment';


/**
 * Use this writer to log information to the logentries server.
 */
@Injectable()
export class LogglyWriter extends LogWriter {

    constructor(
        loggingService: ILoggingService,
        private loggly: LogglyService, 
        @Optional() configuration: IConfigurationService
    ) {
        super(loggingService, configuration)
        // console.info('Init LogentriesWriter')
    }

    preWritting() {
        if(!environment.production || !this.configs.logglyToken) {
            return
        }
        try {
            this.loggly.push({
                logglyKey: this.configs.logglyToken,
                tag: 'nhannguyendacoder'
            });
        } catch (error) {
            const message = `${this.targetEntry.application}.LogglyWriter: ${{ ...error }}`;
            console.error(message);
        }
    }

    /**
     * Implementation of the abstract method. This will perform the
     * actual `write` action for the specified writer.
     */
    write(): void {
        if(!environment.production || !this.configs.logglyToken) {
            return
        }

        // let log = this.formatEntry(this.targetEntry)
        let log = {
            ...this.targetEntry,
            timestamp: new Date(this.targetEntry?.timestamp).toISOString(),
        }
        if (this.targetEntry.level === 'debug') {
            if (this.debug) {
                this.loggly.push(log)
            }
        } else {
            this.loggly.push(log);
        }
    }

    /**
     * Use this function to format a specified [Log Entry] item. This should be moved
     * to a specific [formatter] service that can be injected into the specified
     * writer.
     * @param logEntry
     */
    private formatEntry(logEntry: ILoggingFullData): string {
        return `
            timestamp: ${new Date(logEntry?.timestamp).toISOString()}; 
            application: ${logEntry?.application}; 
            level: ${logEntry?.level}; 
            message: ${logEntry?.message}; 
            action: ${logEntry?.action}; 
            errorCode: ${logEntry?.errorCode}; 
            errorName: ${logEntry?.errorName}; 
            stack: ${logEntry?.stack}; 
        `
    }
}
