import IGenerator from '../generator/IGenerator';
import IInput from '../input/IInput';
import ITemplatingProcessor from '../templating/ITemplatingProcessor';
import ICommandInterface from './command/ICommandInterface';

export default class Runner {
    private _mainCommand: ICommandInterface;

    constructor(mainCommand: ICommandInterface) {
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
