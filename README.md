# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rbbenett`

**Require it:**

`const _ = require('@rbbenett/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Determine if two arrays are equal and return back true or false depending on result
* `assertEqual`: Determine if two parameters are equal and return a statement back depending on if they are true or false
* `assertObjectsEqual`: Determine if two Objects are equal by their keys and if they are both arrays and return back a statement on whether they are true or false
* `countLetters`: Loop through a string and return a count of total letters in the string
* `countOnly`: Loop through an array and return only items that meet a set parameter
* `eqArray`: Determine whether or not two arrays are of equal length and return a true or false statement
* `eqObjects`: Determine if two objects in array are equal and return back a true or false statement
* `findKey`: Sort through an object and determine if it has a defined key
* `findKeyByValue`: Sort through an object and find a key by a defined value
* `flatten`: Sort through an array containing nested arrays and return a single array
* `head`: Determine the first value in an array and return it
* `letterPositions`: Iterate through a string a return back an array defining where each letter occurs in that string
* `map`: Iterate through an array and return only items of that array that are defined by a callback function
* `tail`: Iterate through an array and return all value that occur after the first index in the array
* `takeUntil`: Iterate through an array and return all values until a callback function has been met
* `without`: Iterate through an array and remove all values that match and return a new array containing those values.

