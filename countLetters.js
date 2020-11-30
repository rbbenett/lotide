const countLetters = function(inputString) {
  
  const results = {};
  for (let letter of inputString) {
    if (letter === ' ') continue; //skip spaces

    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("lighthouse"));

module.exports = countLetters;