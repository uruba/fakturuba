import Runner from './cli/Runner';
import IConfig from './config/IConfig';
import IGenerator from './generator/IGenerator';
import IInput from './input/IInput';
import ITemplatingProcessor from './templating/ITemplatingProcessor';

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
