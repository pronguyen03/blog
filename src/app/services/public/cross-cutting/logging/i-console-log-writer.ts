import { Injectable } from '@angular/core';
import { ConsoleWriter } from '../../cross-cutting/log-writers/console-writer';
import { ILogWriter } from '../../cross-cutting/log-writers/i-log-writer';

@Injectable({
    providedIn: 'root',
    useClass: ConsoleWriter
})
export interface IConsoleLogWriter extends ILogWriter {

}