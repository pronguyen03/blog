import { IConfigurationService } from '../i-configuration.service';
import { ILogWriter } from './i-log-writer';
import { Optional } from '@angular/core';
import { ILoggingService } from '../i-logging.service';
import { IConfiguration, ILoggingConfiguration, ILoggingData, ILoggingFullData } from 'src/app/models';

export abstract class LogWriter implements ILogWriter {
    protected configs: ILoggingConfiguration
    protected targetEntry: ILoggingFullData
    protected debug: boolean
    private applicationName: string

    constructor(
        loggingService: ILoggingService,
        @Optional() configuration: IConfigurationService
    ) {
        if(configuration) {
            configuration.configs$.subscribe(configs => {
                this.handleConfigs(configs)
                loggingService.logEntries$.subscribe(log => this.handleLogEntry(log))
            })
        }
    }

    /**
     * Use this method to execute the write process for the
     * specified [Log Entry] item.
     *
     * Using the [template method] design pattern.
     */
    execute() {
        this.preWritting();
        if (this.validateEntry()) {
            this.write();
        }
        this.finish();
    }

    /**
     * Use to perform an setup or configuration of the [writer].
     * The [setup] method runs on all executions of the writer - and
     * is called before the [write] method.
     */
    preWritting() {}

    /**
     * Use to validate the [log entry] before attempting to write
     * using the specified [log writer].
     *
     * Returns a [false] boolean to indicate the item is not valid.
     */
    validateEntry(): boolean {
        // no validate for now
        return true
    }

    /**
     * Use to implement the actual write of the [Log Entry].
     */
    abstract write();

    /**
     * Use to finish the process or clean-up any resources.
     */
    finish() { }

    private handleConfigs(configs: IConfiguration) {
        if (!configs || !configs.logging) {
            return
        }
        this.applicationName = configs.applicationName
        this.debug = configs.debug
        this.configs = configs.logging
    }

    private handleLogEntry(logEntry: ILoggingData) {
        this.targetEntry = this.getLoggingData(logEntry)
        this.execute();
    }

    private getLoggingData(data: ILoggingData): ILoggingFullData {
        return {
            timestamp: new Date().getTime(),
            applicationName: this.applicationName,
            level: data.level,
            ...data,
        }
    }
}
