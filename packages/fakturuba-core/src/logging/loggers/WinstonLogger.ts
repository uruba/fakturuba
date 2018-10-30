import { ILogger } from '@fakturuba/interfaces';
import { createLogger, Logger, LoggerOptions } from 'winston';

export default class WinstonLogger implements ILogger {
    private logger: Logger;

    constructor(options: LoggerOptions) {
        this.logger = createLogger(options);
    }

    public log(level: string, message: string): void {
        this.logger.log(level, message);
    }
}
