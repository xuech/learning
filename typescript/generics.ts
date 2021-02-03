function echo <T>(arg: T): T {
  return arg
}

echo('string')

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const s = swap([1, '10'])
console.log(s);

/// 泛型约束
interface IWidth {
  length: number
}
// 限制函数去处理任意带有.length属性的所有类型
function echoWidth<T extends IWidth>(arg: T): T {
  console.log(arg.length)
  return arg
}
echoWidth('str')
echoWidth({ length: 10})
echoWidth([1,2,3])


interface KeyPair<T, U> {
  key: T
  value: U
}

let key1: KeyPair<number, string> = { key: 1, value: 'string'}
let key2: KeyPair<string, number> = { key: "1", value: 1}
let arr: Array<number> = [1,2,3]