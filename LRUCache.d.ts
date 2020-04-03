export default class LRUCache<T> {
    max: number;
    cache: Map<string, T>;
    constructor(max?: number);
    get(key: string): T | undefined;
    set(key: string, val: T): T;
    _first(): any;
}
