## Array

### Problem Summary

Follow TTD principles and implement an array data structure with built in methods for manipulating and storing data.

---

### Key Learning Takeaways

This project has helped me to understand better how the array data structure works under the hood. Its also given me hands-on experience with TDD practises and practice my OOP skills.

---

### Design Decisions

This custom array data structure was implemented from scratch using the `MyArray` class with default properties and methods. I chose to use an object to store the data for fast lookups and to avoid simply using a native array under the hood. The trade-off is that objects in JavaScript are not inherently ordered, but by using numeric indices as keys, I can maintain the correct order of elements.

---

### ✅ Features Implemented

**Properties:**

- `.length`

**Methods:**

- `.find()`
- `.pop()`
- `.push()`
- `.get()`
- `.set()`
- `.remove()`
- `.values()`

---

### 🧪 Edge Cases Considered

- Empty structure
- Index out of range error handled
- Incorrect argument type error handled

---

### 📊 Time and Space Complexity

| Operation | Time Complexity |
| --------- | --------------- |
| Find      | O(n)            |
| Pop       | O(1)            |
| Push      | O(1)            |
| Get       | O(1)            |
| Set       | O(1)            |
| Remove    | O(n)            |
| Values    | O(n)            |

The overall space complexity for the data structure is O(n), where n is the number of elements stored.

---

### 🔗 Testing

- **Unit tests** check initialsation, individual methods and properties are correct.
- **Integration tests** verify that a sequence of method calls works as expected and the data structure maintains integrity throughout.

---

### ✅ Checklist

- [x] TDD principles adhered to
- [x] Required data structure and method implemented
- [x] Unit tests written and passing
- [x] Integration test written and passed
- [x] Linter and type checker pass
- [x] Documentation updated
