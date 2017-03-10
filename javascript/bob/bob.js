/*
bob - a lackadasical teenager
*/

var Bob = function() {};

Bob.prototype.hey = function(input) {

   var isUpperCase      = input === input.toUpperCase();
   var containsAlpha    = input.match(/[a-z]/i)
   var isShouting       = isUpperCase && containsAlpha;
   var endsWithQuestion = input.charAt(input.length - 1) === '?';
   // '+' removes contiguous spaces, not just char by char.
   var isEmpty          = input.replace(/\s+/g, '') === '';

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
