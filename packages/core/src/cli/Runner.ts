import ICommand from '@fakturuba/interfaces/cli/ICommand';
import IGenerator from '@fakturuba/interfaces/generator/IGenerator';
import IInput from '@fakturuba/interfaces/input/IInput';
import ILogger from '@fakturuba/interfaces/logging/ILogger';
import ITemplatingProcessor from '@fakturuba/interfaces/templating/ITemplatingProcessor';
import LoggerContainer from '../logging/LoggerContainer';
import MainCommand from './command/MainCommand';

export default class Runner {
    private _mainCommand: ICommand = new MainCommand();

    private _loggerContainer: LoggerContainer = new LoggerContainer();

    constructor(mainCommand?: ICommand, loggerContainer?: LoggerContainer) {
        if (mainCommand)
            this._mainCommand = mainCommand;

        if (loggerContainer)
            this.loggerContainer = loggerContainer;
    }

    set loggerContainer(value: LoggerContainer) {
        this._loggerContainer = value;
    }

    public addLogger(logger: ILogger) {
        this._loggerContainer.addLogger(logger);
    }

    public log(level: string, message: string) {
        this._loggerContainer.log(level, message);
    }

    public async run(
        input: IInput,
        templatingProcessor: ITemplatingProcessor,
        generator: IGenerator,
        args?: string[],
    ): Promise<number> {
        return this._mainCommand.execute(input, templatingProcessor, generator, this._loggerContainer, args);
    }
}
