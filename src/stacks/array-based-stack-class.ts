const _items = Symbol("items")
export class StackArray {
  _items = []
  constructor() {
    this[_items] = []
  }

  push(element) {
    this._items.push(element)
  }

  peek() {
    return this._items[this._items.length - 1]
  }

  pop() {
    return this._items.pop()
  }

  clear() {
    this._items = []
  }

  isEmpty() {
    return this._items.length === 0
  }
}