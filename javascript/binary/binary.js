/*
binary - convert a binary number, represented as a string (e.g. '101010'),
to its decimal equivalent using first principles
*/

var Binary = function(binaryNum) {
  this.binaryNum = binaryNum;
};


Binary.prototype.toDecimal = function() {
  // validate input (only contains 1's and 0's)
  var isBinary = /^[01]+$/.test(this.binaryNum);

  if (!isBinary) {
    return 0;
  }

  var decimal = 0;
  // reverse binary number for easier computation
  var binaryReverse = this.binaryNum.split('').reverse().join('');

  for (var i = 0; i < binaryReverse.length; i++) {
    decimal += parseInt(binaryReverse.charAt(i)) * 2 ** i;
  }

  return decimal;
};

module.exports = Binary;
