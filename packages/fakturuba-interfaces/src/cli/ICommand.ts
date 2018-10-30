import IGenerator from '../generator/IGenerator';
import IInput from '../input/IInput';
import ITemplatingProcessor from '../templating/ITemplatingProcessor';

export default interface ICommand {
    execute(
        input: IInput,
        templatingProcessor: ITemplatingProcessor,
        generator: IGenerator,
        args?: string[],
    ): Promise<number>;
}
