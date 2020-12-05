const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let objectIndex in object1) {
    if (Array.isArray(object1[objectIndex])) {
      if (!eqArrays(object1[objectIndex], object2[objectIndex])) return false;
    } else if (typeof object1[objectIndex] === 'object') {
      if (!eqArrays(object1[objectIndex], object2[objectIndex])) return false;
    } else if (object1[objectIndex] !== object2[objectIndex]) return false;
    
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

module.exports = eqObjects;