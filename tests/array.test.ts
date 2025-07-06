import MyArray from "../src/array";

describe("MyArray", () => {
  test("should initialize with length 0", () => {
    const arr = new MyArray();
    expect(arr.length).toBe(0);
  });

  test("add a value to the array with pop method", () => {
    const arr = new MyArray();
    expect(arr.values()).toEqual([]);
  });
});
