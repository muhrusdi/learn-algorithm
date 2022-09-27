export class StackObj {
  items = {}
  count = 0
  constructor() {
    this.items = {}
    this.count = 0
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  size() {
    return this.count
  }

  clear() {
    this.items =  {}
  }

  isEmpty() {
    return this.count === 0
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

}