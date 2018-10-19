import ICommand from '@fakturuba/interfaces/cli/ICommand';
import IGenerator from '@fakturuba/interfaces/generator/IGenerator';
import IInput from '@fakturuba/interfaces/input/IInput';
import ITemplatingProcessor from '@fakturuba/interfaces/templating/ITemplatingProcessor';
import LoggerContainer from '../../logging/LoggerContainer';

export default class MainCommand implements ICommand {
    public async execute(
        input: IInput,
        templatingProcessor: ITemplatingProcessor,
        generator: IGenerator,
        loggerContainer: LoggerContainer,
        args?: string[],
    ): Promise<number> {
        await generator.generate(input, templatingProcessor);

        return 0;
    }
}
