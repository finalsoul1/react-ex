var Stack = (function() {
  function Stack() {
    this.top = null
    this.count = 0
  }
  function Node(data) {
    this.data = data
    this.next = null
  }
  Stack.prototype.push = function(data) {
    var node = new Node(data)
    node.next = this.top
    this.top = node
    return ++this.count
  }
  Stack.prototype.pop = function() {
    if (!this.top) {
      return false
    }
    var data = this.top.data
    this.top = this.top.next
    this.count--
    return data
  }
  Stack.prototype.stackTop = function() {
    return this.top.data
  }
  return Stack
})()

var stack = new Stack()
stack.push(1)
stack.push(21)
stack.push(14)
stack.push(142)
console.log(stack.pop());
console.log(stack.stackTop());
console.log(stack);
