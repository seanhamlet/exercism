/*
isogram - determine if a word or phrase is an isogram
*/

var Isogram = function(word) {
  this.word = word;
};

Isogram.prototype.isIsogram = function() {

  // remove spaces and hyphens between words and lowercases
  this.word = this.word.toLowerCase().replace(/[-\s]+/g, '');

  // determine if letter is repeated
  for (var letter of this.word) {
    if (count(this.word, letter) > 1) {
      return false;
    }
  }

  return true;

  // count number of times 'letter' occurs in 'str'
  function count(str, letter) {
    return str.split(letter).length - 1;
  }
}

module.exports = Isogram;
