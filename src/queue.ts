export default class MyQueue<T> {
  private items: T[] = [];

  get values() {
    return [...this.items];
  }

  get size() {
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
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }
}
