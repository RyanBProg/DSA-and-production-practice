export default class MyQueue<T> {
  private items: T[] = [];

  values() {
    return this.items;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.items.length === 0) {
      return undefined;
    }

    return this.items[0];
  }

  enqueue(value: T) {
    this.items[this.items.length] = value;
  }

  dequeue() {
    return this.items.shift();
  }
}
