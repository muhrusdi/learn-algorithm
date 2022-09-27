import { StackObj } from "./object-based-stack-class"
import { StackArray } from "./array-based-stack-class"
import { convertDecimealtoBinary } from "./convert-decimal-to-binary"

export const run = () => {

  // const stack = new StackObj()
  const stack = new StackArray()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  console.log(stack._items)
  console.log("last item -----", stack.pop())
  console.log("peek -----", stack.peek())
  console.log("binary -----", convertDecimealtoBinary(40))
  console.log(stack._items)
}