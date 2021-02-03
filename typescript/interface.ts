interface Animal {
  name: string
  age: number
  sex?: number
  eat(food: string):void
}

/// 约束性：定义的变量必须和Person的形状保持一致，不能少不能多
/// 可选性：如果想让某些元素不生效可以在接口的变量上打？
/// 只读性：只能在创建的时候被赋值
let dog: Animal = {
  name: 'viking',
  age: 20,
  eat(food: string) {
    
  }
}
console.log(dog.age);

/// 实现接口
class Cat implements Animal {
  name: string
  age: number
  eat(food: string) {
    console.log(`${this.name} eat ${food}`)
  }
  constructor(name: string) { }
}

/// 继承接口
interface Person extends Animal {
  height: number
}
let p = <Person>{};
p.name = 'xch'
p.eat('米饭')