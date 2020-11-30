const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀️ 😀️😀️Assertion Passed: ${actual} === ${expected}`);
  } else { 
    console.log(`😭️😭️😭️Assertion Failed: ${actual} !== ${expected}`);
  }ee

};

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

console.log(countLetters("lighthouse"))