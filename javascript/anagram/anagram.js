/*
anagram - given a word and list of possible anagrams,
select the correct sublist
*/

var Anagram = function(word) {
  this.word = word;
};

Anagram.prototype.matches = function() {
  var wordList = [];
  var matchList = [];
  // sort original word
  var thisWordSorted = this.word.toLowerCase().split('').sort().join('');

  // check argument type for string arguments or list of strings
  if (typeof arguments[0] === 'string') {
    for (word of arguments) {
      wordList.push(word)
    }
  } else {
    wordList = arguments[0];
  }

  for (word of wordList) {
    // if word length is not same as this.word length, skip
    if (word.length !== this.word.length)
      continue;

    // if word is exact same, skip
    if (wordMatch(word.toLowerCase(),this.word.toLowerCase()))
      continue;

    // sort word
    var sortedWord = word.toLowerCase().split('').sort().join('');

    // determine if sorted words match
    var doesMatch = wordMatch(sortedWord, thisWordSorted);

    if (doesMatch)
      matchList.push(word);
  }

  return matchList;

  function wordMatch(word1, word2) {
    // see if words match
    for (var i = 0; i < word1.length; i++) {
      if (word1.charAt(i) !== word2.charAt(i))
        return false;
    }
    return true;
  }
}



module.exports = Anagram;
