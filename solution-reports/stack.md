## Stack

### Problem Summary

Follow TTD principles and implement a custom stack data structure with built in methods for manipulating and storing data.

---

### Key Learning Takeaways

This project helped me better understand how a stack works under the hood. It also gave me hands-on experience with TDD, testing best practices, and stack manipulation techniques in TypeScript.

---

### Design Decisions

The stack was implemented using a class-based approach. I chose to use an internal array to store the stack’s items because it allows for simple and performant access to last-in-first-out operations. The class wraps this internal structure with a clear, stack-specific interface.

---

### ✅ Features Implemented

**Properties:**

- `.size`

**Methods:**

- `.pop()`
- `.push()`
- `.peek()`
- `.isEmpty()`

---

### 🧪 Edge Cases Considered

- Popping from an empty stack returns undefined and does not throw an error.

---

### 📊 Time and Space Complexity

| Operation | Time Complexity |
| --------- | --------------- |
| Pop       | O(1)            |
| Push      | O(1)            |
| Peek      | O(1)            |
| isEmpty   | O(1)            |

The overall space complexity for the data structure is O(n), where n is the number of elements stored.

---

### 🔗 Testing

- **Unit tests** check initialsation, individual methods and properties are correct.
- **Integration tests** verify that a sequence of method calls works as expected and the data structure maintains integrity throughout.

---

### ✅ Checklist

- [x] TDD principles adhered to
- [x] Implementation completed to modern coding practices
- [x] Unit tests written and passing
- [x] Integration test written and passed
- [x] Linter and type checker pass
- [x] `./solution-report` folder updated with an explanation
