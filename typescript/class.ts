/// 1 继承
/// 子类包含了一个构造函数，它必须调用 super() 执行基类的构造函数
class Animals {
  name: string
  protected age: number
  constructor(theName: string) { this.name = theName }
  sleep(time: number) {
    console.log(`能睡 ${time} 小时`);
  }
}

class Dog extends Animals {
  static StaticName = '我是静态属性'
  constructor(name: string) { super(name) }
  bark() {
    console.log('Woof! Woof!');
  }
  // 子类里可以重写父类的方法
  sleep(time = 8) {
    super.sleep(time)
  }
}
const dog2 = new Dog('汪汪')
// dog2.age = 12
dog2.sleep()
console.log(Dog.StaticName)


/// 2 属性关键字
/// public【默认】
/// private: 只能在类内部访问，子类也不行
/// protected: 只能在类及它的子类中访问