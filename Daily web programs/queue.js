class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(x) {
    this.items.push(x);
  }
  dequeue() {
    if (this.isEmpty()) return "underflow";
    return this.items.shift();
  }
  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
  isEmpty() {
    return this.items.length == 0;
  }
}
var queue = new Queue();

console.log(queue.dequeue());

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

console.log(queue.printQueue());

console.log(queue.dequeue());

console.log(queue.printQueue());

queue.enqueue(70);

console.log(queue.printQueue());

console.log(queue.dequeue());

console.log(queue.printQueue());
