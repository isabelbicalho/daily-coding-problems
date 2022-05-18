const input = {
  0: [1, 2],
  1: [0, 5],
  2: [0],
  3: [6],
  4: [],
  5: [1],
  6: [3]
}

const run = (input) => {
  result = 0;

  const sets = []
  const marked = []

  const findSets = (index, friendship, set) => {
    if (!marked.includes(index)) {
      set.add(index);
      marked.push(index);
      if (friendship) {
        var i;
        for (i = 0; i < friendship.length; i++) {
          if (!marked.includes(friendship[i]) && !set.has(friendship[i])) {
            set.add(friendship[i]);
            findSets(friendship[i], input[friendship[i]], set);
          }
        }
      }
    }
    return set;
  }

  var j;
  keys = Object.keys(input);
  for (j = 0; j < keys.length; j++ ) {
    if (!marked.includes(j))
      sets.push(findSets(j, input[j], new Set()));
  }
  
  console.log(sets);
  result = sets.length;
  return result;
}

console.log(run(input)); 
