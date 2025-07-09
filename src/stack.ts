export default class MyStack<T> {
  private _items: Array<T> = [];

  get size(): number {
    return this._items.length;
  }

  get items() {
    return this._items;
  }

  push(value: T) {
    this._items.push(value);
  }

  pop() {
    if (this._items.length === 0) return undefined;
    const lastIndex = this._items.length - 1;
    const value = this._items[lastIndex];
    this._items = this._items.slice(0, lastIndex);
    return value;
  }

  peek() {
    if (this._items.length === 0) return undefined;
    return this._items[this._items.length - 1];
  }

  isEmpty() {
    return this._items.length === 0;
  }
}
