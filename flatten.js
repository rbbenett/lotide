const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀️😀️😀️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭️😭️😭️Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const flatten = function(nestedArray) {
  let newArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      newArray = newArray.concat(flatten(nestedArray[i]));
    } else {
      newArray.push(nestedArray[i]);
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
