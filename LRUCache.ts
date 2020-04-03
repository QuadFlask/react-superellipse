export default class LRUCache<T> {
    max = 10;
    cache: Map<string, T> = new Map();

    constructor(max = 10) {
        this.max = max;
    }

    get(key: string) {
        const item = this.cache.get(key);
        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }

    set(key: string, val: T): T {
        if (this.cache.has(key))
            this.cache.delete(key);
        else if (this.cache.size == this.max)
            this.cache.delete(this._first());
        this.cache.set(key, val);
        return val;
    }

    _first() {
        return this.cache.keys().next().value;
    }
}
