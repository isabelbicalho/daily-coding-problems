/*
  Resolution:

  Build the first prefix according to the size of the array.
  Parse numbers, check their prefix.

  If the parsed integer has more than 8 bits or doesn`t match the available prefixes, return false.

  Complexity: O(N)
*/

const input = [226, 130, 172]

const run = (input) => {

  var utf8Size = input.length;
  var i;
  var prefix = '';

  const getBinary = (i) => {
    var parsed = i.toString(2)
    
    if (i.length > 8)
      return null
    res = ('00000000' + parsed).substr(-8) 
    return res
  }

  if (utf8Size == 1) {
    bin = getBinary(input[0])
    if (bin && bin[0] == '0')
      return true;
    else
      return false; 
  }

  for (i = 0; i < utf8Size; i++) {
    prefix += '1'
  }
  prefix += '0'

  bin = getBinary(input[0])
  debugger
  if (bin && bin.startsWith(prefix)) {
    for (i = 1; i < utf8Size; i++) {
      debugger
      bin = getBinary(input[i])
      if (!bin || !bin.startsWith('10'))
        return false
    }
    return true;
  }
  return false; 
}

console.log(run(input)); 
