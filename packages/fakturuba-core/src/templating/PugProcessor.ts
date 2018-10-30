import { IInput, ITemplatingProcessor } from '@fakturuba/interfaces';
import { compile, compileTemplate, LocalsObject } from 'pug';

export default class PugProcessor implements ITemplatingProcessor {
    private compileFunction: compileTemplate | undefined = undefined;

    public async process(templateInput: IInput, variables: LocalsObject): Promise<string> {
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
