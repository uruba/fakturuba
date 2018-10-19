import IInput from '../input/IInput';

export default interface ITemplatingProcessor {
    process(templateInput: IInput, variables: any): Promise<string>;
}
