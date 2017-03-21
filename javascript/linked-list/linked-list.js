/*
linked-list - implement a doubly linked list
*/

var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this._length = 0;
};

LinkedList.prototype.push = function(value) {
  var node = new Node(value);

  // if length is non-zero
  if (this._length) {
    // point tail.next to new node
    this.tail.next = node;
    // point new node.prev to old tail
    node.prev = this.tail;
    // make tail new node
    this.tail = node;
    // if length is zero, add new node as head and tail
  } else {
    this.head = node;
    this.tail = node;
  }

  this._length++;

  return node.value;
};

LinkedList.prototype.pop = function () {

  // if have previous value (i.e. not only item in list)
  // then set tail next pointer to null
  if (this.tail) {
    // get node from back
    var node = this.tail;
    // move tail to back minus 1
    this.tail = node.prev;
    // remove pointer from back node
    node.prev = null;
    // if new tail is not null, remove pointer to removed back node
    if (this.tail) {
      this.tail.next = null;
    }
  }

  this._length--;

  // make head null if tail also null
  if (this._length === 0) {
    this.head = null;
  }

  return node.value;
};

LinkedList.prototype.shift = function() {
  var front = this.head;
  var frontNext = this.head.next;

  // if have next value (i.e. not only item in list)
  // then set head to prev pointer to null
  if (this.head) {
    // get node from front
    var node = this.head;
    // move head to next node
    this.head = node.next;
    // remove node pointer to front
    node.next = null;
    // if new head is not null, remove pointer to removed front node
    if (this.head) {
      this.head.prev = null;
    }
  }

  this._length--;

  // make head null if tail also null
  if (this._length === 0) {
    this.tail = null;
  }

  return front.value;
};

LinkedList.prototype.unshift = function(value) {
  var node = new Node(value);

  // if length is non-zero
  if (this.head) {
    // point new node.next to original head
    node.next = this.head;
    // point original head.prev to new node
    this.head.prev = node;
    // make new node, the head
    this.head = node;
  } else {
    this.head = node;
    this.tail = node;
  }

  this._length++;

  return node.value;

};

LinkedList.prototype.count = function() {
  return this._length;
};

LinkedList.prototype.delete = function(value) {
  var currentNode = this.head;

  while(currentNode) {
    if (currentNode.value === value) {
      var prev = currentNode.prev;
      var next = currentNode.next;
      if (prev) {
        prev.next = next;
      }
      if (next) {
        next.prev = prev;
      }
      this._length--;
      return;
    }
    currentNode = currentNode.next;
  }
};


function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

module.exports = LinkedList;

// var list = new LinkedList();
// console.log(list);
// list.unshift(10);
// console.log(list);
// list.unshift(20)
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// // console.log(list.pop());
// console.log(list);
// var currentNode = list.head;
// for (var i = 0; i < list._length; i++) {
//   console.log(currentNode);
//   currentNode = currentNode.next;
// }
