{
   function join<aa>(first: aa, two: aa){
    return `${first}${two}`
  }
  join<string>('不学习','就难受')

  function myfun<aaa>(params: aaa[]) {
    return params;
  }
  function myfun1<ccc>(params: Array<ccc>) {
    return params;
  }
  myfun<string>(['151', '1516'])
  
  function person<aaa, bbb>(name: aaa, age: bbb) {
    console.log(`${name}今年${age}岁`);
  }
  person<string, number>('张三', 18);
   

  function Animale<ccc, ddd>(a1: ccc, a2: ddd) {
     console.log(`${a1}${a2}`);  
  }
  Animale <string,string>('平头哥','喜欢吃辣条')
  


// 泛型的继承 注意这里有小坑  aa类型不确定 不确定是数组还是 字符串 只有这两个类型的数据 可以有length属性 所以必须继承string 或者array
  //第一种 aa可以通过 任意类型的数组找到length长度
  function getlength<aa extends any[]>(arg: aa): number{
   return arg.length    
  }
  getlength(['aaa','bbb'])
}
  // 第二章可以有length属性的方法
function getlen<t extends { length: number }>(arg: t) {
   console.log(`${arg.length}`);
}
getlen<string>('dasdas')
 
// 字符串或者 数组类型

function getlen1<t extends string | any[]>(arg: t) {
  console.log(`${arg.length}`);
}

getlen1(['dasd','dasda'])