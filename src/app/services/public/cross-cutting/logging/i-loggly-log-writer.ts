import { Injectable } from '@angular/core';
import { ConsoleWriter } from '../../cross-cutting/log-writers/console-writer';
import { ILogWriter } from '../../cross-cutting/log-writers/i-log-writer';
import { LogglyWriter } from '../../cross-cutting/log-writers/loggly-writer';

@Injectable({
    providedIn: 'root',
    useClass: LogglyWriter
})
export interface ILogglyLogWriter extends ILogWriter {

}