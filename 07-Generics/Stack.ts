class Stack<T>{
  private items: T[] = [];

  //push
  push(item:T):void{
    this.items.push(item)
  }

  //pop
  pop():T|undefined{
    return this.items.pop();
  }

  //return
  peek():T{
    return this.items[this.items.length - 1];
  }

  isEmpty():boolean{
    return this.items.length === 0;
  }
}

const numberStack = new Stack<number>();

numberStack.push(10);
numberStack.push(5);
numberStack.push(2);
numberStack.push(96);
console.log(numberStack);

console.log("--------------------------");
const pop = numberStack.pop();
console.log(numberStack ,"=-=-=-=",pop);

console.log("--------------------------");
const ans = numberStack.peek();
console.log(numberStack,"-=-=-=-=-=-",ans);

console.log("--------------------------");
const a = numberStack.isEmpty()
console.log(a);
