import IConfig from '@fakturuba/interfaces/config/IConfig';
import IGenerator from '@fakturuba/interfaces/generator/IGenerator';
import IInput from '@fakturuba/interfaces/input/IInput';
import ITemplatingProcessor from '@fakturuba/interfaces/templating/ITemplatingProcessor';
import Runner from './src/cli/Runner';

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
