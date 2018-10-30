import { Runner } from '@fakturuba/cli';
import { IConfig, IGenerator, IInput, ITemplatingProcessor } from '@fakturuba/interfaces';

export default (
    runner: Runner,
    input: IInput,
    templatingProcessor: ITemplatingProcessor,
    generator: IGenerator,
    config?: IConfig,
) => {
    runner.run(input, templatingProcessor, generator, process.argv)
        .then((exitCode: number) => {
            process.exit(exitCode);
        })
        .catch((err: Error) => {
            process.exit(1);
        });
};

export { default as LoggerContainer } from './logging/LoggerContainer';
