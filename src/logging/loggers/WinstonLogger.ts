import {createLogger, log, Logger, transports} from 'winston';
import ILogger from './ILogger';

export default class WinstonLogger implements ILogger {
    private logger: Logger;

    constructor(logFileName: string) {
        this.logger = createLogger({
            transports: [
                new transports.Console(),
                new transports.File({filename: logFileName}),
            ],
        });
    }

    public log(level: string, message: string): void {
        this.logger.log(level, message);
    }
}
