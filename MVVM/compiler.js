function Compiler(vm) {
  this.$vm = vm
  this.compile(this.$vm.$el)
  
}

Compiler.prototype.compile = function (el) {
  // console.log(el.childNodes);
  Array.from(el.childNodes).forEach(node => {
    if (this.isTextNode(node)) {
      this.compileTextNode(node)
    }
  
    if (this.isElementNode(node)) {
      this.compileElementNode(node)
      this.compile(node)
    }
  })
}
/**
 * 编译元素节点
 * <p v-text="msg"></p>   => <p>abc</p>
 * <input v-model="msg">   => input的value
 * 
 * 1. 找到所有属性attrbuites
 * 2. 判断指令属性
 * 3. 处理具体的指令
*/
Compiler.prototype.compileElementNode = function (node) {
  // console.log(node.attributes);
  // name: "v-model.number" value: "age"
  Array.from(node.attributes).forEach(attr => {
    console.dir(attr)
    const value = attr.value
    const attriName = attr.name
    // 过滤出v-开头的指令
    if (this.isDirective(attriName)) {
      if (attriName === 'v-text') {
        node.textContent = this.$vm.$data[value]
        bus.$on(value, () => {
          node.textContent = this.$vm.$data[value]
        })
      }
      if (attriName === 'v-model') {
        node.value = this.$vm.$data[value]
        bus.$on(value, () => {
          node.value = this.$vm.$data[value]
        })
      }

    }
  })
}
/**
 * 编译文本节点
 * <p>{{msg}}</p> => <p>abc</p>
*/
Compiler.prototype.compileTextNode = function (node) {
  // console.log(node.textContent);
  const txt = node.textContent;
  const reg = /\{\{(.+)\}\}/
  if (reg.test(txt)) {
    //取出符合条件的单词 msg
    const key = RegExp.$1.trim()
    // console.log(key);
    node.textContent = this.$vm.$data[key]
    
    bus.$on(key, () => {
      node.textContent = this.$vm.$data[key]
    })
  }
  
}
/**
 * 文本节点
*/
Compiler.prototype.isTextNode = function (node) {
  return node.nodeType === 3
}
/**
 * 元素节点
*/
Compiler.prototype.isElementNode = function (node) {
  return node.nodeType === 1
}
  

/**
 * 是否是指令
*/
Compiler.prototype.isDirective = function (attrName) {
  return attrName.startsWith('v-')
}