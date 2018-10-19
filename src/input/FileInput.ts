import IInput from './IInput';

export default class FileInput implements IInput {
    public async read(filename: string): Promise<string> {
        return '';
    }
}
