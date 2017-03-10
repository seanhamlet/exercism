/*
pangram - determine if a sentence is a pangram (uses every letter)
*/

var Pangram = function(sentence) {
  this.sentence = sentence;
};

Pangram.prototype.isPangram = function() {
  var letters = 'abcdefghijklmnopqrstuvwxyz';

  for (var letter of letters) {
    // if letter not contained in string, return false
    if (this.sentence.toLowerCase().indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
};

module.exports = Pangram;
