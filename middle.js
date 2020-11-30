const middle = function(array) {
  let midArray = [];
  if (array.length <= 2) {
    return midArray;
  } else if (array.length % 2 === 0) {
    let midIndex = Math.floor(array.length / 2) - 1;
    midArray = array.slice(midIndex, midIndex + 2);
  } else if (array.length % 2 !== 0) {
    let midIndex = Math.floor(array.length / 2);
    midArray = array.slice(midIndex, midIndex + 1);
  }
  return midArray;
};

module.exports = middle;