class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(element) {
    var node = new Node(element);
    var current;

    if (this.head == null) this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  insertAtPos(element, index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      var node = new Node(element);
      var curr, prev;

      curr = this.head;
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
  removeFromPos(index) {
    if (index < 0 || index >= this.size)
      return console.log("Please Enter a valid index");
    else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;

      return curr.element;
    }
  }
  remove(element) {
    var current = this.head;
    var prev = null;
    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }
  print() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

var ll = new LinkedList();

ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(5);

ll.print();

ll.remove(5);

ll.print();

ll.insertAtPos(9, 3);

ll.print();

ll.removeFromPos(3);

ll.print();
