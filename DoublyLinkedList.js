class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element);
      let current = this.head,
        previous = null,
        index = 0;
      if (position === 0) {
        if (!head) {
          this.head = current;
          this.tail = node;
        } else {
          node.next = current;
          this.head = node;
          current.prev = node;
        }
      } else if (position === this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.length++;
      return true;
    }
    return false;
  }

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head,
        previous = null,
        index = 0;
      if (position === 0) {
        this.head = this.head.next;
        this.head.prev = null;
        if (this.length === 1) {
          this.tail = null;
        }
      } else if (position === this.length - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }
}
