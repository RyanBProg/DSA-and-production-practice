export default class MyArray<T> {
  private _length: number = 0;
  private items: { [key: number]: T } = {};

  get length(): number {
    return this._length;
  }
}
