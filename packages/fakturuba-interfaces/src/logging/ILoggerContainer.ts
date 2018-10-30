import ILogger from './ILogger';

export default interface ILoggerContainer {
    loggers: ILogger[];

    addLogger(logger: ILogger): void;
    log(level: string, message: string): void;
}
