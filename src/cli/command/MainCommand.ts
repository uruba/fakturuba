import IGenerator from '../../generator/IGenerator';
import IInput from '../../input/IInput';
import ITemplatingProcessor from '../../templating/ITemplatingProcessor';
import ICommandInterface from './ICommandInterface';

export default class MainCommand implements ICommandInterface {
    public async execute(
        input: IInput,
        templatingProcessor: ITemplatingProcessor,
        generator: IGenerator,
        args?: string[],
    ): Promise<number> {
        await generator.generate(input, templatingProcessor);

        return 0;
    }
}
