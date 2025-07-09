import MyStack from "../src/stack";

describe("Test the stack data strucutre and its methods", () => {
  test("test the stack initialisation", () => {
    const stack = new MyStack();
    expect(stack.items).toEqual([]);
  });

  test("checking the size property", () => {
    const stack = new MyStack();
    expect(stack.size).toEqual(0);
  });

  test("checking the push method", () => {
    const stack = new MyStack();
    stack.push("test");
    expect(stack.items).toEqual(["test"]);
  });

  test("checking the pop method", () => {
    const stack = new MyStack();
    expect(stack.pop()).toBeUndefined();
    stack.push("test");
    stack.push("remove");
    expect(stack.items).toEqual(["test", "remove"]);
    const value = stack.pop();
    expect(value).toEqual("remove");
    expect(stack.items).toEqual(["test"]);
  });

  test("checking the peek method", () => {
    const stack = new MyStack();
    stack.push("test");
    stack.push("remove");
    expect(stack.peek()).toEqual("remove");
  });

  test("checking the isEmpty method", () => {
    const stack = new MyStack();
    expect(stack.isEmpty()).toEqual(true);
    stack.push("test");
    expect(stack.isEmpty()).toEqual(false);
  });

  test("stack should support a sequence of operations", () => {
    const stack = new MyStack();
    expect(stack.isEmpty()).toEqual(true);
    stack.push("a");
    stack.push("b");
    stack.push("c");
    expect(stack.peek()).toEqual("c");
    expect(stack.size).toEqual(3);
    expect(stack.isEmpty()).toEqual(false);
    stack.pop(); // remove "c"
    expect(stack.peek()).toEqual("b");
    expect(stack.size).toEqual(2);
    expect(stack.isEmpty()).toEqual(false);
  });
});
