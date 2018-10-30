import { ICommand, IGenerator, IInput, ITemplatingProcessor } from '@fakturuba/interfaces';

export default class MainCommand implements ICommand {
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
