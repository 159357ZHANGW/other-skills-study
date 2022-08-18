{
  
  // let p1 = () => 'aa';
  // 使用显示类型定义函数
  let p1:Function
  p1 = () => 'asdasd';
  console.log(p1());
  


  function gettotal(a: number, b: number): number {
    return a + b;
  }

  console.log(gettotal(1, 2));

  function sayhello(): void {
    console.log('hello');
    // return 156165;  报错

  }
  sayhello()

  let sum1 = (a: number, b: number): string => {
    return `计算结果是:${a+b}`
  } 
  
  function sum(a: number, b: number, ratio: number = 0.8,c?:number) {
    return (a + b) * ratio;
  }
  console.log(sum(3,3));
  

  // 函数参数为对象解构时  注意 参数内两个花括号间 用 :

  function add({ one, two }:{ one: number, two: number }) :number{
    return one + two;
  }
  console.log(add({one:1,two:2}));
  
  function talk({ person, saying }: { person: string, saying: string }): string{
    return `${person}喜欢${saying}`
  }

  console.log(talk({person:'小红',saying:'打麻将！'}));
  
}