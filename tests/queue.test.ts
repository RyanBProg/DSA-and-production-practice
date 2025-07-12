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
});
