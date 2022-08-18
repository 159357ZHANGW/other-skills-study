{
  // 第一种声明数组方法
  let num: number[] = [15, 65];
  console.log(num);
  let str: string[] = ['a', 'b', 'c'];
  console.log(str);
  // 第二种声明数组方法

  let dd :Array<string>;
  dd = ['小红', '小兰']
  dd.push('adas')
  console.log(dd);
  
  // 数组中可多类型
  // let a1: (number | string)[] = [1, 'asd', 56]; 
  
// 数组中对象类型的定义
  
  let students: { name: string, age: number }[] = [
    { name: '小红', age: 12 },
    { name: '小兰', age: 85 }
  ]
// 上述在数组中添加信息的方法比较麻烦
  type Dog = { name: string, age: number }
  
  const dogs: Dog[] = [
    { name: '小黄', age: 2 },
    { name: '小黑', age: 1 }
  ]

  // 元组
  let xiaoming: [string, number];
  xiaoming = ['小明', 20];
    
  let cat: [string, number, string][] = [
    ['小黑', 2, 'balck'],
    ['小花',3,'hua']
  ]
  
  let pig: [string, number][] = [
    ['aaa', 1],
    ['bbb',85]
  ]
}

let xiaohei: [string, number];
xiaohei = ['小黑',12]