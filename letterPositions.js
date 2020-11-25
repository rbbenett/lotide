const letterPositions = function(sentence) {

  // PSEUDOCODE
  // 1. Iterate through a string
  // 2. Notate position of each letter in that string
  // 3. Return letters of string with the indecies of each printed next to it

  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') continue;
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i]
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));