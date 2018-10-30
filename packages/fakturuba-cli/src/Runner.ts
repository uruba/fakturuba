import { ICommand, IGenerator, IInput, ILoggerContainer, ITemplatingProcessor } from '@fakturuba/interfaces';
import MainCommand from './command/MainCommand';

export default class Runner {
    private _mainCommand: ICommand = new MainCommand();

    constructor(mainCommand?: ICommand) {
        if (mainCommand)
            this._mainCommand = mainCommand;
    }

    public async run(
        input: IInput,
        templatingProcessor: ITemplatingProcessor,
        generator: IGenerator,
        args?: string[],
    ): Promise<number> {
        return this._mainCommand.execute(input, templatingProcessor, generator, args);
    }
}
