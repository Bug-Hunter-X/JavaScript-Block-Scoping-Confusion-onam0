# JavaScript Block Scoping Bug

This repository demonstrates a common source of confusion in JavaScript: block scoping with `let` and `const`.  The `bug.js` file contains code that exhibits unexpected behavior due to the way JavaScript handles variable scoping within blocks (like `if` statements, loops, etc.). The `bugSolution.js` file provides a corrected version.

**Key Concept:** In JavaScript, variables declared with `let` or `const` are block-scoped. This means their scope is limited to the block of code (defined by curly braces `{}`) in which they're declared.  Variables declared with `var`, however, have function scope.