export class OperationStatus {
    public current: number;
    public result: number;
    public state: String;
    public status: String;
    public total: number;

    constructor (current: number, result: number, state: String,
         status: String, total: number) {}
}
