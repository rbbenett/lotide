const tail = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
};

module.exports = tail