class Queue {
  constructor(items) {
    this.items = items || []
  }

  enqueue(item) {
    this.items.push(item)
  }

  dequeue() {
    return this.items.shift()
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return !this.size()
  }

  front() {
    return this.isEmpty() ? null : this.items[0]
  }

  toString() {
    return this.items.toString()
  }
}
