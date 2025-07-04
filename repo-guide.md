# DSA and Production Practice Repo Guide

## Repo Setup & Structure

- Solutions go in [src] folder, tests go in [tests] folder.
- Before commencing work, create an issue in GitHub using the template (view steps below).
- Remember to explain the solution in the [solution-explanations.md] file.

**Dependecies**

- Jest -> for testing
- Typescript -> for js types
- ESlint -> for linting
- Prettier -> to enforce coding standards

## Data Structures - Task Guide

Each data structure should be implemented from scratch in TypeScript. Follow a structured development workflow modeled after real-world engineering practices.

**Example Data Structures**

- Array
- Stack
- Queue
- Linked lists
- Trees
- Graphs
- Heaps
- Hash tables

**Steps**

1. Create an issue (e.g. Add Linked List)

- Describe the problem with expected features
- Add requirements and checklist (TDD, constraints, edge cases, time complexity)
- Assign someone to fix the issue

2. Add a new feature branch off [main]

- Name it clearly (e.g. issue-12/linked-list)

3. Follow TDD and create the unit tests first

- Test expected behavior, edge cases, time complexity (if measurable)
- Write integration test (if applicable)

4. Code solution

- Write clean typescript code, to modern standards
- Run lint, type-check and test scripts

5. Run CI scripts locally

6. Make adjustments to Github actions (as required)

7. Push feature branch (review GitHub actions)

8. Create a PR to merge branch to main (reference issue)

- Reference the issue (fixes xyz)
- Fill in the checklist

9. Review and merge code

- Squash commits if required
