## [Data Structure Name]

### Problem Summary

A brief explanation of what this data structure is and what it is used for. Mention core operations it should support.

**Example:**
Implement a singly linked list that supports `insert`, `delete`, `find`, and `traverse` operations.

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

### 🔗 Integration Test Scenario (if applicable)

Describe a real-world use/test case:

- Insert several elements
- Delete one in the middle
- Search for an existing and a non-existing value
- Confirm the list structure remains valid

---

### ✅ Checklist

- [x] Unit tests written and passing
- [x] Integration test written (if needed)
- [x] Linter and type checker pass
- [x] PR merged
