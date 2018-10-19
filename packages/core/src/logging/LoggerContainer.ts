import ILogger from '@fakturuba/interfaces/logging/ILogger';

export default class LoggerContainer {
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
