import MyQueue from "../src/queue";

describe("testing the MyQueue class and methods", () => {
  test("queue should initialize with the length at 0", () => {
    const queue = new MyQueue();
    expect(queue.size()).toBe(0);
  });

  test("enqueue should add items to the queue", () => {
    const queue = new MyQueue();
    queue.enqueue("first");
    queue.enqueue("second");
    expect(queue.values()).toEqual(["first", "second"]);
  });

  test("dequeue should remove items from the queue", () => {
    const queue = new MyQueue();
    queue.enqueue("first");
    queue.enqueue("second");
    expect(queue.values()).toEqual(["first", "second"]);
    queue.dequeue();
    expect(queue.values()).toEqual(["second"]);
  });

  test("peek should return the item at the front of the queue", () => {
    const queue = new MyQueue();
    queue.enqueue("first");
    queue.enqueue("second");
    expect(queue.peek()).toEqual("first");
  });

  test("isEmpty should return detect if the queue has items", () => {
    const queue = new MyQueue();
    expect(queue.isEmpty()).toEqual(true);
    queue.enqueue("first");
    expect(queue.isEmpty()).toEqual(false);
  });

  test("clear should remove all items in the queue", () => {
    const queue = new MyQueue();
    queue.enqueue("first");
    queue.enqueue("second");
    expect(queue.values()).toEqual(["first", "second"]);
    queue.clear();
    expect(queue.values()).toEqual([]);
  });

  test("the queue should support a sequence of operations", () => {
    const queue = new MyQueue();
    expect(queue.isEmpty()).toEqual(true);
    queue.enqueue("first");
    queue.enqueue("second");
    expect(queue.values()).toEqual(["first", "second"]);
    expect(queue.peek()).toEqual("first");
    expect(queue.isEmpty()).toEqual(false);
    queue.dequeue();
    expect(queue.values()).toEqual(["second"]);
    queue.clear();
    expect(queue.values()).toEqual([]);
    expect(queue.isEmpty()).toEqual(true);
  });
});
