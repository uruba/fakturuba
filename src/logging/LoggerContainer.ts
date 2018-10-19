import ILogger from './loggers/ILogger';

export default class LoggerContainer {
    private _loggers: ILogger[] = [];

    get loggers(): ILogger[] {
        return this._loggers;
    }

    public addLogger(logger: ILogger) {
        this._loggers.push(logger);
    }
}
