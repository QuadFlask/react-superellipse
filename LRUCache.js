"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LRUCache = /** @class */ (function () {
    function LRUCache(max) {
        if (max === void 0) { max = 10; }
        this.max = 10;
        this.cache = new Map();
        this.max = max;
    }
    LRUCache.prototype.get = function (key) {
        var item = this.cache.get(key);
        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    };
    LRUCache.prototype.set = function (key, val) {
        if (this.cache.has(key))
            this.cache.delete(key);
        else if (this.cache.size == this.max)
            this.cache.delete(this._first());
        this.cache.set(key, val);
        return val;
    };
    LRUCache.prototype._first = function () {
        return this.cache.keys().next().value;
    };
    return LRUCache;
}());
exports.default = LRUCache;
