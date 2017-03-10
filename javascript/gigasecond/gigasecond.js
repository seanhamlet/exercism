/*
gigasecond - calculate the moment when someone has lived for 10^9 years
*/

var Gigasecond = function(date) {
  this.start = date;
};

Gigasecond.prototype.date = function() {
  // add 10^9 seconds to date and return new date
  return new Date(this.start.getTime() + 1e9 * Math.pow(10,3));
}

module.exports = Gigasecond;
