{
  class kaoyan{
    course = '数学,政治,英语,专业课';
    getbooks() {
      return `1800`
    }
  }
  class cskaoyan extends kaoyan {
    addcourse = 408   
    saying() {
      return 'quit kaoyan'
    }
  }
  
  let xiaohei = new cskaoyan()
  console.log(xiaohei.addcourse);
  console.log(xiaohei.saying());
  
  // super是用来继承的关键字
  class mathkaoyan extends kaoyan{
    saying() {
      return super.getbooks()+ "必须写"
    }
  }
  
  let lihua = new mathkaoyan()
  console.log(lihua.saying());
  
  class Student{
    name: string;
    age: number;
    address?: string;
    constructor(name: string, age: number, address?: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    favo():string {
      return `打麻将!`
    }
  }

  class master extends Student{
    field: string
    constructor(name: string, age: number,field:string, address?: string) {
      super(name, age, address)
      this.field = field
    }
     
    skill() {
      return `划水!`
    }
  }

  let laoli = new master('小李',1500,'ligth eletic')
  
  console.log(laoli.skill());
  console.log(laoli.field);
  
  // 修饰符

  /*
  父类的 private 不允许子类修改
  父类的 protected 子类可以修改为 protected 或 public
  父类的 public 子类只能设置为 public
  
  */
  // public readonly
  class Animal{
    readonly adderss: string = 'china'; 
    constructor(public name: string, public age: number) {
      this.name = name;
      this.age = age;
    }
    
    getaddress() {
      return `china!`
    }
  }

  class ptg extends Animal{
    color: string;
    constructor(name: string, age: number, color: string) {
      super(name, age)
      this.color = color;
    }
    skill() {
      return `吃辣条~`
    }
  }

  let aa = new ptg("aa",15,'gray')
  console.log(aa);
  aa.name = "翠花"
  console.log(aa);
  aa.skill();
  
// protected  只允许在父类与子类使用，不允许在类的外部使用 也可以不调用 受保护的属性

  class Hd{
    protected name: string;
    protected age: number;
    constructor(name: string) {
      this.name = name;
    }
    protected skill() {
      console.log(`sadfasdf`);
      
    }
  }
  class user extends Hd{
    constructor(name: string) {
      super(name)
    }
    public info(): string{
      return `你好${this.name}`
    }
  }

  let a1 = new user('小黑')
  console.log(a1.info());
   
  // a1.name = 'dasd'
  


  // private 修饰符指私有的，不允许在子类与类的外部使用

  // static 用于定义静态属性或方法，属性或方法是属于构造函数的
  // 静态属性是属于构造函数的，不是对象独有的，所以是所有对象都可以共享的

  class Site{
    static url: string = 'baidu.com';
    static geturl() {
      return Site.url
    }
  }
  console.log(Site.geturl());
  

  class Animal1 {
    name: string;
    constructor(name: string) {
      this.name = name
    }

    sayhi() {
      console.log(`hello!!`);
    }
 }
 
  class ltg extends Animal1{
    color: string;
    age: number;
    constructor(name: string, color: string, age: number) {
      super(name)
      this.color = color;
      this.age = age;
    }

    skill() {
      console.log(`吃辣条!!!`);
    }

  }

  let ptg1 = new ltg('平头哥1', 'greey', 18);
  ptg1.skill()

// 抽象类
 /*
    *   以abstract开头的类是抽象类，
    *       抽象类和其他类区别不大，只是不能用来创建对象
    *              //防止 出现 const dog = new Animal(name:'旺财') 用Animal创建的对象 这样的话会把dog的范围扩大
    *       抽象类就是专门用来被继承的类 生下来就是当父类的 给别人当爸爸的
    *
    *      **** 抽象类中可以添加抽象方法
    *      **** 抽象方法只能添加在抽象类中
    *       好比与 现在定义一个 动物类 设置一个 抽象的skill方法 因为每一类动物的skill不同 所以 不能设置固定的skill
    *      
    * */
  
  abstract class moutains {
    name: string;
    constructor(name: string) {
      this.name = name
    }
    abstract special(): void;
  }

  class ql extends moutains {
    beauty: string;
    constructor(name: string, beauty: string) {
      super(name);
      this.beauty = beauty;
    }
    special() {
      console.log(`这里有${this.beauty}`);
    }
  }

  let lujiaoliang = new ql('鹿角梁', '羚牛')
  lujiaoliang.special();

  // get set

  class User{
    private _name;
    constructor(name: string) {
      this._name = name;
    }

    public get name() {
      return this._name
    }
 
    public set name(value) {
      this._name = value
    }
  }

  const hd = new User('平头哥');
  console.log(hd.name);
  hd.name = '翠花';
  console.log(hd.name);
  

 abstract class bird {
    constructor(public name:string) {
      this.name = name;
   }
   abstract jiao(): void;
  }

  class maque extends bird {
    color: string;
    age?: number;
    jiao() {
      console.log(`${this.name}喜欢嘎嘎嘎嘎`);
    }
    constructor(public name: string, color: string) {
      super(name)
      this.color = color
    }
  } 
 let maque1 = new maque('麻雀','grey')
maque1.jiao()
  























}