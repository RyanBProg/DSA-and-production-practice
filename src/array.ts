export default class MyArray<T> {
  private _length: number = 0;
  private items: { [key: number]: T } = {};

  get length(): number {
    return this._length;
  }

  values() {
    return Object.values(this.items);
  }

  push(value: T) {
    this.items[this._length] = value;
    this._length++;
  }

  pop() {
    if (this._length === 0) return undefined;
    const val = this.items[this._length - 1];
    delete this.items[this._length - 1];
    this._length--;
    return val;
  }

  get(index: number) {
    if (typeof index !== "number") {
      throw new Error(
        "The given argument is not a number, it needs to be of type number",
      );
    }
    if (index > this._length - 1) {
      throw new Error("Given index out of range");
    }
    return this.items[index];
  }
}
