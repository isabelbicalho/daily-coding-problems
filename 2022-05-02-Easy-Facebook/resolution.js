/*
  Resolution:

  Use a stack to record and push open brackets and pop closing brackets.
  Popping is only allowed if the closing brackets matches the open ones.
  If the stack is not empty in the end, it also marks as an invalid string.

  Complexity: O(N)
*/

const inputTrue = "([])[]({})" 
const inputFalse = "([)]"

const run = (input) => {

  var i;
  var stack = [];

  const pushes = ['[', '(', '{'] 
  const pops   = [']', '}', ')'] 

  for (i = 0; i < input.length; i++) {

    if (pushes.includes(input[i])){
      stack.push(input[i])

    } else if (pops.includes(input[i])) {

      if (!stack || 
          stack[stack.length-1] == '(' && input[i] != ')' ||
          stack[stack.length-1] == '[' && input[i] != ']' ||
          stack[stack.length-1] == '{' && input[i] != '}') 
      {
        return false;
      } else {
        stack.pop()
      }
    }
  }
  if (stack.length)
    return false;
  else
    return true;
}

console.log('Input True ([])[]({})')
console.log(run(inputTrue)); 
console.log('Input False ([)]')
console.log(run(inputFalse)); 
