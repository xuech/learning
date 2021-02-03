/// 定义一个返回值类型为number的函数，接受两个number类型的参数，
//  其中y参数可以省略
const add = (x: number, y?: number): number => {
  return x+y
}

// 和interface结合使用
interface ISum {
  (x: number, y: number, z: number): number
}
let add2: ISum = add