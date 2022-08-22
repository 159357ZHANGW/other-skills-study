//  接口与类的不同中的
  // 1.方法 和属性 都是抽象的 不能为具体值  且
  // 2. 接口 用同一个名字 在后续的 同名接口中添加属性
  // 3.不需要使用constructor 直接 let xxx : xxx = {name:'',.......... }这样赋值 或者 通过 implement
  // 4.不能定义类型 static protected private  
  interface myinterface {
    name: string;
    age: number;
  }
  interface myinterface {
    gender: string
    sayhi(): void;
  }

  let xiaohei: myinterface = {
    name: 'xiaohei',
    age: 15,
    gender: 'das',
    sayhi() {
      console.log(`hi${this.name}`);
    }
  }
  xiaohei.sayhi()

  interface Student {
    name: string;
    age: number;
    high: number;
    weight?: number;
    [aa: string]: any;
    skill(): void;
  }

  // 接口和类的约束  implements 就是约束 即使前面的 类继承了父类 但是 类 里面到底有那些 没有哪些 都不回报错 但是有了实现 就会被约束
  class nan implements Student {
    name = '李华';
    age = 18;
    high = 150;
    color = '黑';
    skill() {
      console.log(`sdfasfasf`);
    }
  }

  let nan1 = new nan();
  console.log(nan1);
  
  console.log(nan1.skill());

  // 使用接口来约束对象

  // interface userinfo {
  //   name: string;
  //   age: number;
  //   inlock: boolean;
  //   info(other: string): string;
  // }

  // const lh: userinfo = {
  //   name: "李华",
  //   age: 18,
  
  // }
  interface AnimationInterface {
    name: string;
    move(): void;
  }
  abstract class Animation1 {
    protected getPos(): { x: number, y: number } {
      return { x: 300, y: 500 }
    }
  }
  
  class Tank extends Animation implements AnimationInterface {
    name: string = "坦克";
    public move(): void {
      console.log(`${this.name}在移动`);
    }
  }
  class Player extends Animation implements AnimationInterface {
    name: string = "玩家";
    public move(): void {
      console.log(`${this.name}在移动`);
      
    }
  }
  const play1 = new Player();
  play1.move()
  
  // 对象
  interface Userinfo1 {
    name: string;
    age: number;
    isLock: boolean;
    info(key: string): string,
  }
  const ak: Userinfo1 = {
    name: 'ak',
    age: 18,
    isLock: false,
    info(o: string) {
      return `${this.name}现在${this.age}岁${o}`
    }
  }
  console.log(ak.info('aaa'))
   
  // 接口继承

  interface playendinterface {
    end(): void;
  }
  interface animationinterface extends playendinterface {
    name: string;
    move(): void;
  }

  class animation {
    getpos(): { x: number, y: number } {
      return { x: 300, y: 400 }
    }
  }

  class tank1 extends animation implements animationinterface {
    name: string = "敌方坦克"
    move(): void {
      console.log(`${this.name}在移动`);
    }
    end(): void {
      console.log(`游戏结束`);
    }
  }
  
  class player extends animation {
    name: string = "小黑"
    move() {
      console.log(`${this.name}在移动`)
    }
    end() {
      console.log(`${this.name}游戏结束！`);
    }
  }


  let tankk = new tank1()
  tankk.move()
  
  let play11 = new player()
  play11.move()
  
  // interface userinterface{
  //   name: string;
  //   age: number;
  //   isLock: boolean;
  // }

  // function lockuser(user: userinterface, state: boolean): userinterface{
  //   user.isLock = state;
  //   return user
  // }

  // let user: userinterface = {
  //   name:"小黑",
  //   age: 18,
  //   isLock: false
  // }
  // lockuser(user, true)
  
  // console.log(user.isLock);
  // console.log(user.name);
  // console.log(user.age);
  
  interface userinterface1 {
    name: string,
    age: number,
    islock: boolean
  }
  
  function lockuser(user: userinterface1, status: boolean): userinterface1 {
    user.islock = status;
    return user
  }

  let user: userinterface1 = {
    name: '张三',
    age: 18,
    islock: false
  }
  lockuser(user, true);
  console.log(user.islock);
  console.log(user.name);
  
  interface jiuzhe {
    name: string;
    age: number;
    zhuangtai: boolean
  }

  function jiuzhexinxi(person: jiuzhe, status: boolean) {
    person.zhuangtai = status;
  }
   
  let person: jiuzhe = {
    name: '小黑',
    age: 100,
    zhuangtai: false
  }
  jiuzhexinxi(person, true)
  console.log(person.zhuangtai);
  

  // 构造函数
  
  interface userxinxi {
    name: string;
    age: number;
  }
  class student {
    userinfo: userxinxi;
    constructor(userinfo: userxinxi) {
      this.userinfo = userinfo
    }
  }
  let xiaomei = new student({ name: '小美', age: 18 })
  console.log(xiaomei.userinfo.name);
  
  // 数组类
  const li1: userxinxi = {
    name: 'li1',
    age: 18
  }
  const li2: userxinxi = {
    name: 'li2',
    age: 20
  }
  const user2: userxinxi[] = [];
  user2.push(li1, li2);
  console.log(user2);
  

  interface student1 {
    name: string;
    age: number;
    [props: string]: any;
    sex?: string;
  }

  let stu1: student1 = {
    name: '张三',
    age: 22
  }
  let stu2: student1 = {
    name: '李四',
    age: 100
  }
  let dayixuesheng: student1[] = [];
  dayixuesheng.push(stu1, stu2);

  console.log(dayixuesheng);
  
  enum gender {
    male,
    female
  }

  interface graduate {
    name: string;
    sex: gender;
    age?: number;
    [props: string]: any;
  }
  let awei: graduate = {
    name: '阿伟',
    sex: gender.male
  }
  console.log(awei.sex);
  console.log(gender[1]);
  
   
  interface PayInterace{
    handle(price: number): void;
  }

  class AliPay implements PayInterace{
    handle(price: number): void {
      console.log(`阿里支付`);
    }
  }
  
  class WePay implements PayInterace{
    handle(price: number): void {
      console.log(`微信支付`);
    }
  }
  function pay(type: string, price: number):void {
    let pay: PayInterace
    if (type == 'alipay') {
      pay = new AliPay()
    } else {
      pay = new WePay()
    }
    pay.handle(price)
  }
  

 





  // interface PayInterace {
  //   handle(price: number): void
  // }

  // class AliPay implements PayInterace {
  //   handle(price: number): void {
  //     console.log('支付宝付款');
  //   }
  // }
  // class WePay implements PayInterace {
  //   handle(price: number): void {
  //     console.log('微信付款');
  //   }
  // }

  // //支付调用
  // function pay(type: string, price: number): void {
  //   let pay: PayInterace
  //   if (type == 'alipay') {
  //     pay = new AliPay()
  //   } else {
  //     pay = new WePay()
  //   }
  //   pay.handle(price)
  // }




type User = {
  name: string;
  age: number;

}
  
type sex = 'boy' | 'girl';
const hdd: User = {
  name: '张三',
  age:215
}

type Usertype = {
  [key: string]: any;
}

type admin = {
  role: string,
  islock: boolean;
}

type Member = {
  name: string;
}

type user1 = admin & Member;

const hhd: user1 = {
  role: 'da',
  islock: true,
   name:'dasda'
}







