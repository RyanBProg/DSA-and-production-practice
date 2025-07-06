import MyArray from "../src/array";

describe("MyArray", () => {
  test("should initialize with length 0", () => {
    const arr = new MyArray<string>();
    expect(arr.length).toBe(0);
  });
});
