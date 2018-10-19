import {compile, compileTemplate} from 'pug';
import IInput from '../input/IInput';
import ITemplatingProcessor from './ITemplatingProcessor';

export default class PugProcessor implements ITemplatingProcessor {
    private compileFunction: compileTemplate | undefined = undefined;

    public async process(templateInput: IInput, variables: object): Promise<string> {
        const compileSource = await templateInput.read();
        const compileFunction = this.getCompileFunction(compileSource);

        return compileFunction(variables);
    }

    private getCompileFunction(compileSource: string) {
        if (typeof this.compileFunction === 'undefined')
            this.compileFunction = compile(compileSource);

        return this.compileFunction;
    }
}
