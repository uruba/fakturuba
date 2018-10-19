import IGenerator from '../generator/IGenerator';
import IInput from '../input/IInput';
import LoggerContainer from '../../core/src/logging/LoggerContainer';
import ITemplatingProcessor from '../templating/ITemplatingProcessor';

export default interface ICommand {
    execute(
        input: IInput,
        templatingProcessor: ITemplatingProcessor,
        generator: IGenerator,
        loggerContainer: LoggerContainer,
        args?: string[],
    ): Promise<number>;
}
