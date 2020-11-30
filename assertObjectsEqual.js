const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😀️😀️😀️Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😭️😭️😭️Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
  

// const ab = {a: "25", b: "50"};
// const ba = {b: "50", a: "25"};
// assertObjectsEqual(ab, ba);

// const abc = {a: "25", b: "50", c: "75"};
// assertObjectsEqual(ab, abc);

// const cd = {c: "1", d: ["2", 3]};
// const dc = {d:["2", 3], c: "1"};
// assertObjectsEqual(cd, dc);

// const cd2 = {c: "1", d: ["2", 3, 4]};
// assertObjectsEqual(cd, cd2);

module.exports = assertObjectsEqual;