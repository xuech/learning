var LRUCache = function (max) {
  this.max = max;
  this.keys = new Set()
  this.map = new Map()
}

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    this.keys.delete(key)
    this.keys.add(key)
  }
  return this.cache.get(key) || -1
}

LRUCache.prototype.put = function (key, value) { 
  const cacheKey = this.cache.has(key);
  //已经有key了，更新对应的值就行
  this.cache.set(key, value)
  if (cacheKey) {
    //更新keys中的位置
    this.keys.delete(key)
    this.keys.add(key)
  } else {
    //新增对应的key
    this.keys.add(key)
    //如果溢出就把
    if (this.keys.size > this.max) { 
      const first = Array.from(this.keys)[0];
      this.cache.delete(first);
      this.keys.delete(first);
    }
  }

  
}

let cache = new LRUCache(2)
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache);
console.log(cache.get(2));