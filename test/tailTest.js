const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);