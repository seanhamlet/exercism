/*
hamming - Calculate the Hamming difference between two DNA strands.
*/

var Hamming = function() {};

Hamming.prototype.compute = function(dna1, dna2) {
  if (dna1.length !== dna2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  var distance = 0;

  // treat string as array and loop through comparing each value
  for (var i = 0; i < dna1.length; i++) {
      if (dna1.charAt(i) !== dna2.charAt(i)) {
        distance++;
      }
  }

  return distance;
}

module.exports = Hamming;
