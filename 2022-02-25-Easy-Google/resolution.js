const inputTrue = 'acbbac';


const inputFalse = 'abcdef';

/*
  Resolution:

  Add every new character to a set.
  If a character is already in the set, just return this first occurence.
*/

const run = (input) => {
  result = null;

  const occured = new Set();
  let i;
  let c;
  let stop = false;
  for (i = 0; i < input.length && !stop; i++){
    c = input[i];
    if (occured.has(c)){
      result = c;
      stop = true;
    } else {
      occured.add(c);
    }
  }
  return result;
}

console.log("-- True resolution --")
console.log(run(inputTrue)); 
console.log("-- False resolution --")
console.log(run(inputFalse)); 
