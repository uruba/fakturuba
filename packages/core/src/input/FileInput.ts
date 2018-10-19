import IInput from '@fakturuba/interfaces/input/IInput';

export default class FileInput implements IInput {
    public async read(filename: string): Promise<string> {
        return '';
    }
}
