var Queue = (function() {
  function Queue() {
    this.count = 0
    this.head = null
    this.rear = null
  }
  function Node(data) {
    this.data = data
    this.next = null
  }
  Queue.prototype.enqueue = function(data) {
    var node = new Node(data)
    if (!this.head) {
      this.head = node
    } else {
      this.rear.next = node
    }
    this.rear = node
    return ++this.count
  }
  Queue.prototype.dequeue = function() {
    if (!this.head) {
      return false
    }
    var data = this.head.data
    this.head = this.head.next
    --this.count
    return data
  }
  Queue.prototype.front = function() {
    return this.head && this.head.data
  }
  return Queue
})()

var queue = new Queue()

queue.enqueue(5)
queue.enqueue(123)
queue.enqueue(2)
queue.enqueue(42)
queue.dequeue()

console.log(queue.front());
