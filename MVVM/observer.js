function Observer(data) {
  if (data && typeof data === 'object') { 
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }
}

Observer.prototype.defineReactive = function (data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get:function () {
      return value
    },
    set:function (newVal) {
      if (value === newVal) return
      value = newVal
      //更新视图
      bus.$emit(key)
    }
  })
}