export class AstraResponse<T> {
    constructor (public readonly data: T, public readonly response: any) {}
}
