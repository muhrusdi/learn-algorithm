import { StackObj } from "./object-based-stack-class"
import { StackArray } from "./array-based-stack-class"

export const run = () => {

  const stack = new StackObj()
  // const stack = new StackArray()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  console.log(stack.items)
  console.log("last item -----", stack.pop())
  console.log(stack.items)
}