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
  var low = 0;
  var high = this.array.length - 1;

  var mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (this.array[mid] === key) {
      return mid;
    } else if (this.array[mid] < key) {
      low = mid + 1;
    } else if (this.array[mid] > key) {
      high = mid - 1;
    }
  }

  return -1;
};


module.exports = BinarySearch;
