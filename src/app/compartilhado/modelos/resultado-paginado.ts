export class ResultadoPaginado<T> {
    first: boolean = false;
    items: T[] = [];
    hasNext: boolean = false;
}
