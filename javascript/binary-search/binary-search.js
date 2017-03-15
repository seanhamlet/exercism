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

  return binarySearch(key, this.array, low, high);

  function binarySearch(key, array, low, high) {
    mid = Math.floor((low + high) / 2);
    if (low > high) {
      return -1; // key not found
    } else if (key === array[mid]) {
      return mid; // key found
    } else if (key < array[mid]) {
      return binarySearch(key, array, low, mid - 1); // search left sublist
    } else if (key > array[mid]) {
      return binarySearch(key, array, mid + 1, high); // search right sublist
    }
  }

};


module.exports = BinarySearch;
