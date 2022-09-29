export class Queue {
  items = {}
  count = 0
  lowestCount = 0
  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  dequeue() {
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  size() {
    return this.count - this.lowestCount
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString() {
    if (this.isEmpty()) {
      return ""
    }

    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }

    return objString
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
}