import MyArray from "../src/array";

describe("MyArray implementation", () => {
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

  test("test the set method changes the value of a given index", () => {
    const arr = new MyArray();
    arr.push("first");
    arr.push("second");
    arr.push("third");
    arr.set(1, "new");
    expect(arr.get(1)).toEqual("new");
    expect(() => arr.get(-5)).toThrow("Given index out of range");
  });

  test("test the find method retrieves the value of a given index", () => {
    const arr = new MyArray();
    arr.push("first");
    arr.push("second");
    arr.push("third");
    expect(arr.find("third")).toEqual(2);
    expect(arr.find("sixth")).toEqual(undefined);
  });

  test("test the find method retrieves the value of a given index", () => {
    const arr = new MyArray();
    arr.push("first");
    arr.push("second");
    arr.push("third");
    arr.remove(1);
    expect(arr.values()).toEqual(["first", "third"]);
    expect(arr.get(1)).toEqual("third");
    expect(() => arr.remove(5)).toThrow("Given index out of range");
  });

  test("should support a sequence of operations", () => {
    const arr = new MyArray<string>();
    arr.push("a");
    arr.push("b");
    arr.push("c");
    arr.remove(1); // remove "b"
    arr.set(1, "z"); // set index 1 ("c") to "z"
    expect(arr.values()).toEqual(["a", "z"]);
    expect(arr.length).toBe(2);
    expect(arr.get(0)).toBe("a");
    expect(arr.get(1)).toBe("z");
    expect(arr.find("z")).toBe(1);
    expect(arr.find("b")).toBeUndefined();
    arr.pop();
    expect(arr.values()).toEqual(["a"]);
  });
});
