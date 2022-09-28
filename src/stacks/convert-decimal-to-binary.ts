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

export const baseConverter = (decNumber, base) => {
  const remStack = new StackArray()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber
  let rem
  let binaryString = ""

  if (!(base >= 2 && base <= 36)) {
    return ""
  }

  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
  }


  return binaryString
}