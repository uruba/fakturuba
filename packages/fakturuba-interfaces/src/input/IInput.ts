export default interface IInput {
    read(...params: any[]): Promise<string>;
}
