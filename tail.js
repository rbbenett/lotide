const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀️😀️😀️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭️😭️😭️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);