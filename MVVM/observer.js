function Observer(data) {
  this.$data = data
  Object.keys(data).forEach(key => {
    this.defineReactive(this.$data, key, this.$data[key])
  })
  
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
    }
  })
}