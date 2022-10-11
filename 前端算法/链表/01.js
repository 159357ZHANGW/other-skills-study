


class Node{
  constructor(val) {
    this.val = val;
    this.next = null
  }
}


class LinkNodeList{
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(val) {
    let node = new Node(val)
    // 把head缓存到p里面
    let p = this.head;
    
      if (this.head) {
      // 找到链表的最后一个结点 吧这个节点的.next属性赋值给node
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      // 如果没有head结点，链表为空 吧创建的结点 赋值给head
      this.head = node;
    }
    this.length++;

  }
  print() {
    let p = this.head;
    let str = '';
    do {
      str += p.val + '=>';
      p = p.next;
    } while (p.next)
    str+=p.val
    console.log(str);
  }
}


let linkList = new LinkNodeList()

linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)

console.log(linkList.length);
linkList.print()

// 对象方法的链表
const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

// 遍历链表
// 插入
const e = { val: 'e' };
c.next = e;
e.next = d;

// 删除
c.next = d;





let p = a;
while (p) {
  console.log(p.val);
  p = p.next
}




















