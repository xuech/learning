function EventEmitter() {
  // {'a': [handle1,handle2]}
  this.subs = {}
}

EventEmitter.prototype.$on = function (eventType, handle) {
  this.subs[eventType] = this.subs[eventType] || []
  this.subs[eventType].push(handle)
}

EventEmitter.prototype.$emit = function (eventType, ...rest) {
  if (this.subs[eventType]) {
    this.subs[eventType].forEach(handle => {
      handle.call(this, ...rest)
    });
  }
}

let bus = new EventEmitter()
bus.$on('a',function () {
  console.log('a');
})
bus.$on('b',function () {
  console.log('b');
})
bus.$emit('b')

//1. this的绑定问题
//2. 剩余参数
//3. 对象中key类型
//4. 发布订阅模式