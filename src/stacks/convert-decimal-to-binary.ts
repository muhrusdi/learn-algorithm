import { StackArray } from "./array-based-stack-class"

export const convertDecimealtoBinary = (decNumber) => {
  const remStack = new StackArray()
  let number = decNumber
  let rem
  let binaryString = ""

  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }


  return binaryString
}