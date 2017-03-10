/*
gigasecond - calculate the moment when someone has lived for 10^9 years
*/

var Gigasecond = function(startDate) {
  this.startDate = startDate;
};

Gigasecond.prototype.date = function() {
  // define gigamillisecond
  var gigamillisecond =  Math.pow(10,9) * Math.pow(10,3);

  // clone original date so as to not affect original
  this.gsDate = new Date(this.startDate.getTime());

  // set time of gsDate
  this.gsDate.setTime(this.gsDate.getTime() + gigamillisecond);

  // return gsDate
  return this.gsDate;
}

module.exports = Gigasecond;
