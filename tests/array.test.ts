import MyArray from "../src/array";

describe("MyArray", () => {
  test("array should initialize with the length at 0", () => {
    const arr = new MyArray();
    expect(arr.length).toBe(0);
  });

  test("checking the values method returns correctly", () => {
    const arr = new MyArray();
    expect(arr.values()).toEqual([]);
  });

  test("add a value to the array with the push method", () => {
    const arr = new MyArray();
    arr.push("testing...");
    expect(arr.values()).toEqual(["testing..."]);
    expect(arr.length).toBe(1);
  });

  test("remove a value from the array with the pop method", () => {
    const arr = new MyArray();
    arr.push(1);
    arr.push("remove");
    const removed = arr.pop();
    expect(arr.length).toBe(1);
    expect(removed).toBe("remove");
    expect(arr.values()).toEqual([1]);
    arr.pop();
    arr.pop();
    expect(arr.values()).toEqual([]);
  });

  test("get method to return the value of a specified index", () => {
    const arr = new MyArray();
    arr.push("first");
    arr.push("second");
    arr.push("third");
    expect(arr.get(1)).toEqual("second");
    expect(() => arr.get(5)).toThrow("Given index out of range");
  });
});
