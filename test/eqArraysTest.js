const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');



assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);