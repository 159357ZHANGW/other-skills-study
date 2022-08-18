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
  
// protected  只允许在父类与子类使用，不允许在类的外部使用

  class Hd{
    protected name: string;
    constructor(name: string) {
      this.name = name;
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

  // staticstatic 用于定义静态属性或方法，属性或方法是属于构造函数的
  // 静态属性是属于构造函数的，不是对象独有的，所以是所有对象都可以共享的

  class Site{
    static url: string = 'baidu.com';
    static geturl() {
      return Site.url
    }
  }
  console.log(Site.geturl());
  
}