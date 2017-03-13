/*
anagram - given a word and list of possible anagrams,
select the correct sublist
*/

var Anagram = function(word) {
  this.word = word;
  this.normalize = function(word) {
    return word.toLowerCase().split('').sort().join('');
  };
};

Anagram.prototype.matches = function(words) {
  var matchList = [];
  var original = this.word;

  // check argument type for string arguments or list of strings
  if (!Array.isArray(arguments[0])) {
    words = Array.from(arguments);
  }

  for (word of words) {
    // make sure they aren't exact same word
    if(word.toLowerCase() === original.toLowerCase()) {
      continue;
    }

    // determine if sorted words match
    if (this.normalize(word) === this.normalize(this.word)) {
      matchList.push(word);
    }
  }

  return matchList;
}



module.exports = Anagram;
