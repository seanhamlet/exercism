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
  var seenLetters = [];
  for (var letter of this.word) {
    if (seenLetters.includes(letter)){
      return false;
    } else {
      seenLetters.push(letter);
    }
  }

  return true;
}

module.exports = Isogram;
