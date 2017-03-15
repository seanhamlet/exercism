/*
binary-search - implement a binary search algorithm
*/

var BinarySearch = function(arr) {
  this.array = arr;

  // validate array (make sure it is sorted)
  for (var i = 0; i < this.array.length - 1; i++) {
    if (this.array[i+1] < this.array[i]) {
      this.array = undefined;
      break;
    }
  }
};

BinarySearch.prototype.indexOf = function(key) {
  var left = 0;
  var right = this.array.length - 1;

  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (this.array[mid] === key) {
      return mid;
    } else if (this.array[mid] < key) {
      left = mid + 1;
    } else if (this.array[mid] > key) {
      right = mid - 1;
    }
  }

  return -1;

};


module.exports = BinarySearch;
