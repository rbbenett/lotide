const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀️😀️😀️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭️😭️😭️Assertion Failed: ${actual} !== ${expected}`);
  }

};

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
  

const ab = {a: "25", b: "50"};
const ba = {b: "50", a: "25"};
assertEqual(eqObjects(ab, ba), true);

const abc = {a: "25", b: "50", c: "75"};
assertEqual(eqObjects(ab, abc), false);

const cd = {c: "1", d: ["2", 3]};
const dc = {d:["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true);

const cd2 = {c: "1", d: ["2", 3, 4]};
assertEqual(eqObjects(cd, cd2), false);