class DLinkedNode {
  constructor(value, key) {
    this.prev = null;
    this.next = null;
    this.value = value;
    this.key = key;
  }
}
class DLinked {
  constructor() {
    this.head = new DLinkedNode()
    this.tail = new DLinkedNode()
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToHead(node) {
    node.next = this.head.next
    this.head.next.prev = node

    this.head.next = node
    node.prev = this.head
  }

  moveToHead(node) { 
    // 解除自己
    node.next.prev = node.prev
    node.prev.next = node.next
    node.prev = null
    node.next = null

    // 插入head
    node.next = this.head.next
    this.head.next.prev = node

    this.head.next = node
    node.prev = this.head

  }

  removeTail() {
    const tailNode = this.tail.prev
    tailNode.prev.next = this.tail
    this.tail.prev = tailNode.prev
    return tailNode
  }
}

class LRUCache { 
  constructor(max) { 
    this.max = max;
    //哈希表用对象即可，不推荐用map
    //因为map本身的key是有序的，会让题目简单许多，没有考察到双向链表的操作逻辑
    // this.map = new Map()
    this.map = {}
    this.cache = new DLinked()
  }

  /**
   * 获取缓存值
   * 不存在返回-1，存在返回对应value值，并将此节点移到尾巴
   * @param {*} key  key值
   */
  get(key) {
    const node = this.map[key]
    if (node) {
      this.cache.moveToHead(node)
      return node.value
    }
    return -1
  }

  put(key, value) {
    const node = this.map[key]
    if (node) {
      this.cache.moveToHead(node)
      node.value = value
      return 
    }

    const newNode = new DLinkedNode(value, key)
    this.map[key] = newNode
    if (this.max) {
      this.max--
    } else {
      const node = this.cache.removeTail()
      delete this.map[node.key]
    }
    this.cache.addToHead(newNode)
  }
}

let cache = new LRUCache(2)
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache);
console.log(cache.get(2));

