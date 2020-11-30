const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(actual, expected) {
  if (Object.keys(actual).length !== Object.keys(expected).length) return false;

  for (let objectIndex in actual) {
    if (Array.isArray(actual[objectIndex])) {
      if (!eqArrays(actual[objectIndex], expected[objectIndex])) return false;
    } else if (typeof actual[objectIndex] === 'object') {
      if (!eqObjects(actual[objectIndex], expected[objectIndex])) return false;
    } else if (actual[objectIndex] !== expected[objectIndex]) return false;
    
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😀️😀️😀️Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😭️😭️😭️Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
  

const ab = {a: "25", b: "50"};
const ba = {b: "50", a: "25"};
assertObjectsEqual(ab, ba);

const abc = {a: "25", b: "50", c: "75"};
assertObjectsEqual(ab, abc);

const cd = {c: "1", d: ["2", 3]};
const dc = {d:["2", 3], c: "1"};
assertObjectsEqual(cd, dc);

const cd2 = {c: "1", d: ["2", 3, 4]};
assertObjectsEqual(cd, cd2);

module.exports = assertObjectsEqual;