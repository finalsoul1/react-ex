var LinkedList = (function() {
  function LinkedList() {
    this.length = 0
    this.head = null
  }
  function Node(data) {
    this.data = data
    this.next = null
  }
  LinkedList.prototype.add = function(value) {
    var node = new Node(value)
    var current = this.head
    if (!current) {
        this.head = node
        this.length++
        return node
    } else {
        while(current.next) {
            current = current.next
        }
        current.next = node
        this.length++
        return node
    }
  }
  LinkedList.prototype.search = function (position) {
      var current = this.head
      var count = 0
      while(count < position) {
          current = current.next
          count++
      }
      return current.data
  }
  LinkedList.prototype.remove = function (position) {
      var current = this.head
      var before
      var remove
      var count = 0
      if(position == 0) {
          remove = this.head
          this.head = this.head.next
          this.length--
          return remove
      } else {
          while (count < position) {
              before = current
              count++
              current = current.next
          }
          remove = current
          before.next = remove.next
          this.length--
          return remove
      }
  }
  return LinkedList
})()

var list = new LinkedList()
list.add(1)
list.add(88)

console.log(list.add(99));

console.log(list);
