import IInput from '../input/IInput';
import ITemplatingProcessor from '../templating/ITemplatingProcessor';

export default interface IGenerator {
    generate(input: IInput, templatingProcessor: ITemplatingProcessor, ...inputArgs: any): Promise<void>;
}
