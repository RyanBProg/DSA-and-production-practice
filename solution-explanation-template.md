## [Data Structure Name]

### Problem Summary

A brief explanation of what this data structure is and what it is used for. Mention core operations it should support.

**Example:**
Implement a singly linked list that supports `insert`, `delete`, `find`, and `traverse` operations.

---

### Key Learning Takeaways

This project has helped me to understand better how the linked list data structure works under the hood. Its also given me hands-on experience with TDD practises and practice my OOP skills.

---

### Design Decisions

Explain how you approached the implementation:

- Why did you use a certain data structure (e.g., array vs object)?
- Did you use a class, function, or module approach?
- Any trade-offs considered? (e.g., memory vs speed)

**Example:**
Used a class-based approach for clearer encapsulation. A dummy head node was used to simplify edge cases in insertion and deletion.

---

### ✅ Features Implemented

List of supported operations, ideally matching what was described in the issue:

- `insertAtHead`
- `insertAtTail`
- `deleteNode`
- `search`
- `printList`

---

### 🧪 Edge Cases Considered

Document important edge scenarios and how they were handled:

- Empty structure
- Single-node structure
- Deleting head/tail
- Inserting into full capacity (if applicable)

---

### 📊 Time and Space Complexity

| Operation      | Time Complexity | Space Complexity |
| -------------- | --------------- | ---------------- |
| Insert at head | O(1)            | O(1)             |
| Delete         | O(n)            | O(1)             |
| Search         | O(n)            | O(1)             |

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
