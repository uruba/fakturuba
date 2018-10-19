import IGenerator from '../../generator/IGenerator';
import IInput from '../../input/IInput';
import ITemplatingProcessor from '../../templating/ITemplatingProcessor';

export default interface ICommandInterface {
    execute(
        input: IInput,
        templatingProcessor: ITemplatingProcessor,
        generator: IGenerator,
        args?: string[],
    ): Promise<number>;
}
