
/**
 * 1. 数据代理：把data的数据挂载到vm上，同时设置setter、getter
 * 2. 数据劫持：为data的属性提供get/set，同时更新dom元素
 * 3. 编译模版：处理视图中的DOM
 * 
*/
function Vue(options) {
  this.$options = options

  this.$data = options.data || {}
  //el: 可以是字符串也可以是dom元素
  const el = options.el
  this.$el = typeof el === 'string' ? document.querySelector(el) : el
  
  this.proxyData()

  new Observer(this.$data)
  new Compiler(this)
}

Vue.prototype.proxyData = function () {
  Object.keys(this.$data).forEach(key => {
    Object.defineProperty(this, key, {
      enumerable: true,
      configurable: false,
      get:function () {
        return this.$data[key]
      },
      set:function (value) {
        if (value === this.$data[key]) return
        this.$data[key] = value
      }
    })
  });
}