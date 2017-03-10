/*
isogram - determine if a word or phrase is an isogram
*/

var Isogram = function(word) {
  this.word = word;
};

Isogram.prototype.isIsogram = function() {

  // remove spaces and hyphens between words
  this.word = this.word.toLowerCase().replace(/[-\s]+/g, '');

  for (var char of this.word) {
    if (count(this.word, char) > 1) {
      return false;
    }
  }

  return true;

  function count(str, char) {
    return str.split(char).length - 1;
  }
}

module.exports = Isogram;
