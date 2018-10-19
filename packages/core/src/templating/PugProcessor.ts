import IInput from '@fakturuba/interfaces/input/IInput';
import ITemplatingProcessor from '@fakturuba/interfaces/templating/ITemplatingProcessor';
import {compile, compileTemplate} from 'pug';

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
