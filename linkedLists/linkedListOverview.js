function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

var LL = new LinkedList();
var Q = new LinkedList();

console.log(LL);
console.log(Q);


LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);
    if(this.tail)this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
    if(!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if(this.head)this.head.prev = null;
    else this.tail = null;
    return val;
};

LinkedList.prototype.removeTail = function() {
    if(!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail)this.tail.next = null;
    else this.head = null;
    return val;
};

LinkedList.prototype.search = function(searchValue){
    var currentNode = this.head;
    while(currentNode) {
        if(currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next;
    }
    return null;
};

LinkedList.prototype.indexOf = function(value){
  var indexes = [];
  var currentNode = this.head;
  var currentIndex = 0;
  while(currentNode) {
    if(currentNode === value) {
      indexes.push(currentIndex);
    }
    CurrentNode = currentNode.next;
    currentIndex ++;
  }
  return indexes;
};


LL.addToHead(10);
LL.addToHead(20);
LL.addToHead(30);
LL.addToTail(50);
LL.addToTail(400);
LL.addToTail(24);
LL.search(5);
