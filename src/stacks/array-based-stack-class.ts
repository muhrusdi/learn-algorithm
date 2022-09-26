export class StackArray {
  items = []
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  pop() {
    this.items.pop()
  }

  clear() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }
}