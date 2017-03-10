/*
bob - a lackadasical teenager
*/

var Bob = function() {};

Bob.prototype.hey = function(input) {
  // remove extra whitespace
  input = input.trim();

  var isShouting = input === input.toUpperCase() && input.match(/[a-z]/i);
  var endsWithQuestion = input.endsWith('?');
  var isEmpty = input.length === 0;

  if (isShouting) {
    // if shouting (uppercase letters)
    return 'Whoa, chill out!';
  } else if (endsWithQuestion) {
   // question
    return 'Sure.';
  } else if (isEmpty) {
     // if string empty or space
    return 'Fine. Be that way!';
  } else {
     // default
    return 'Whatever.';
  }
};

module.exports = Bob;
