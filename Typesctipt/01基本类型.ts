let a: number;
let b: string;
a = 10;

let c: boolean = true;

// 自动就行类型检测
let d = false

// 直接使用字面量就行类型声明
let a1: 10;
a1 = 10;

// 使用 | 来连接多个类型(联合类型)

let person: "male" | "female";

person = "male"


let p: boolean | number;
let p1: string | boolean;

// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let dd;
dd = 10;
dd = "sdasd";
dd = true;

let a5: any[] = ['dasda', 15, true];

// unknown 表示未知类型的值
let e: unknown;
e = 10;
e = 'dasd';
e = true;
// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量

// 数组类型
/*    数组两种类型
     1.类型[]
     2.Array<类型>
*/ 
let hd: string[] = [];
hd.push('aaa', 'bbb');
console.log(hd);

let hh: Array<number> = [];
hh.push(1, 2, 5, 6)
console.log(hh);

// 元组 :明确数组每个成员值类型的数组为元组
let a2: [string, number, boolean]
a2 = ['aa', 5, true];
console.log(a2);

//  对象 下面史声明对象类型但不限制值类型
let a3: object;
a3 = { name: 'aw' }
a3 = {} //使用字面量声明对象
a3 = [] //数组是对象
// a3 = 'sad' //报错 改变了 类型为字符串

let a4:{ name: string,age:number,sex?:string}
a4 = { name: 'das', age: 55 };

let b1: any = 'xiahei'
let b2 :unknown = 'xiaobai'

let b3: string = b1;
// let b4: string = b2 //‘unkonwn’未知类型不能赋值给string类型

// unknowm类型需要明确类型后赋值
let b5: string = b2 as string




