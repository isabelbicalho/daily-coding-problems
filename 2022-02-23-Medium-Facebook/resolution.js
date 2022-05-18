const inputTrue = [
  15, 5, 20, 10, 35, 15, 10
]


const inputFalse = [
  15, 5, 20, 10, 35
]

/*
  Resolution:
  We can apply -1 and 1 weight to all combinations of the array (such as binary combinations)
  and split the array between negatives and positive sets of numbers.
  As they are positive and negative, if their sums are the same, the sum
  between sets should be zero.

  Example:
    Weights:
      -1 -1 -1
      -1 -1  1
      -1  1 -1
      -1  1  1
       1 -1 -1
       1 -1  1
       1  1 -1
       1  1  1

    Array: [15, 5, 20]

    Weighted array:
      -15 -5 -20
      -15 -5  20 <- available answer
      -15  5 -20
      -15  5  20
       15 -5 -20
       15 -5  20
       15  5 -20 <- available answer
       15  5  20

  The method returns if it finds the first available answer.

  Some idea credits: https://www.geeksforgeeks.org/generate-all-the-binary-strings-of-n-bits/
*/

const run = (input) => {
  result = false;

  const sum = (arr) => {
    return arr.reduce((acc, a) => acc + a, 0);
  }

  const weights = (arr, i) => {
    if (result) {
      return;
    }
    if (i == arr.length - 1) {

      console.log(arr);

      if (sum(arr) == 0) {
        console.log("Found this ^");

        result = true;
      }
      return;
    }

    arr[i] = arr[i] * -1;
    weights(arr, i+1);

    arr[i] = arr[i] * -1; // As we have already weighted with -1 before, -1 * -1 = +1
    weights(arr, i+1);
  }  

  weights(input, 0);
  return result;
}

console.log("-- True resolution --")
console.log(run(inputTrue)); 
console.log("-- False resolution --")
console.log(run(inputFalse)); 
