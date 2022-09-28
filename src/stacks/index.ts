import { StackObj } from "./object-based-stack-class"
import { StackArray } from "./array-based-stack-class"
import { convertDecimealtoBinary, baseConverter } from "./convert-decimal-to-binary"

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
  console.log("binary -----", baseConverter(40, 30))
  console.log("binary2 -----", baseConverter(4034, 12))
  console.log("binary3 -----", baseConverter(40444, 23))
  console.log("binary4 -----", baseConverter(40565757, 3))
  console.log(stack._items)
}