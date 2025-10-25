import LinkedList from "../src/linkedList";

describe("Linked list implementation", () => {
  test("intating empty linked list", () => {
    const list = new LinkedList();
    expect(list.size).toBe(0);
    expect(list.head).toBe(null);
  });

  test("prepend", () => {
    const list = new LinkedList();
    expect(list.head).toBe(null);
    list.prepend("first");
    expect(list.head?.value).toBe("first");
    list.prepend("second");
    expect(list.head?.value).toBe("second");
  });

  test("append", () => {
    const list = new LinkedList();
    list.append("first");
    expect(list.head?.value).toBe("first");
    list.append("second");
    expect(list.head?.next?.value).toBe("second");
    list.append("third");
    expect(list.head?.next?.next?.value).toBe("third");
  });
});
