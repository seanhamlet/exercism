/*
leap - Given a year, report if it is a leap year.
*/

var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  var divisibleBy4   = this.year % 4 === 0;
  var divisibleBy100 = this.year % 100 === 0;
  var divisibleBy400 = this.year % 400 === 0;

  return (divisibleBy4 && !divisibleBy100) || divisibleBy400;
};

module.exports = Year;
