import { ILoggingService } from './i-logging.service';
import { ConsoleWriter } from './log-writers/console-writer';
import { LogglyWriter } from './log-writers/loggly-writer';

export function InitLoggingAndWriters(
  loggingService: ILoggingService, 
  consoleWriter: ConsoleWriter, 
  logentriesWriter: LogglyWriter
) {
  // console.info("InitLoggingAndWriters")
  return () => {
    return consoleWriter;
  };
}