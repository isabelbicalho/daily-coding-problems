/*
  Resolution:

  Access the array from its end.
  Skip 2 positions in case path is '..'
  Append only standard paths: not '.' or ''

  Complexity: O(N)
*/

const input = "/usr/bin/../bin/./scripts/../" 

const run = (input) => {
  const paths = input.split("/")
  var i;
  var result = ''
  for (i = paths.length-1; i >=0 ; i--) {
    if (paths[i] == '.') {
      continue;
    }
    if (paths[i] == '..') {
      i -= 1;
      continue;
    }
    if (paths[i]) {
      result = paths[i] + '/' + result;
    } 
  } 
  result = '/' + result;
  return result;
}

console.log(run(input)); 
