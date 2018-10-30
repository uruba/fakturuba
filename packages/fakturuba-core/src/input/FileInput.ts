import { IInput } from '@fakturuba/interfaces';

export default class FileInput implements IInput {
    public async read(filename: string): Promise<string> {
        return '';
    }
}
