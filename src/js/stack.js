// 根据数组实现一个栈
class Stack {
  constructor(items) {
    this.items = items || []
  }

  push(item) {
    this.items.push(item)
  }

  peek() {
    return this.isEmpty() ? undefined : this.items[this.size() - 1]
  }

  pop() {
    this.items.pop()
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return !this.size()
  }

  toString() {
    return JSON.stringify(this.items)
  }
}

const items = [1, 2, 3, 4, 5]
const stack = new Stack(items)
// console.log(stack)
// console.log(stack.toString())
// console.log(stack.size())
// stack.pop()
// console.log(stack.size())
// stack.push(100)
// console.log(stack.peek())
// console.log(stack.isEmpty())
// console.log(stack.size())
//
// console.log(stack.toString())
