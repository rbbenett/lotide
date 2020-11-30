// const assertEqual = require('./assertEqual');
// const eqArrays = require('./eqArrays');

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

// console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;