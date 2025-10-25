export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(data: T, next: Node<T> | null = null) {
    this.value = data;
    this.next = next;
  }
}

export default class LinkedList<T> {
  head: Node<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(val: T) {
    const newNode = new Node(val, this.head);
    this.head = newNode;
    this.size++;
  }

  append(val: T) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
    this.size++;
  }
}
