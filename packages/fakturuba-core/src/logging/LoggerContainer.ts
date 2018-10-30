import { ILogger, ILoggerContainer } from '@fakturuba/interfaces';

export default class LoggerContainer implements ILoggerContainer {
    private _loggers: ILogger[] = [];

    get loggers(): ILogger[] {
        return this._loggers;
    }

    public addLogger(logger: ILogger) {
        this._loggers.push(logger);
    }

    public log(level: string, message: string) {
        for (const logger of this._loggers)
            logger.log(level, message);
    }
}
