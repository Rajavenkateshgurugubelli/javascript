// Logical Operators in JavaScript

// Logical operators are used to perform logical operations on boolean values. They are typically used to combine or manipulate boolean values based on logical principles.

// 1. Logical AND (&&)
console.log('Logical AND (&&)');
console.log('true && false:', true && false); // Output: false
console.log('10 == 20 && 20 == 33:', 10 == 20 && 20 == 33); // Output: false
console.log('true && true:', true && true); // Output: true
console.log('false && false:', false && false); // Output: false
console.log('0 && 1:', 0 && 1); // Output: 0
console.log('1 && 1:', 1 && 1); // Output: 1
console.log('1 && \'a\':', 1 && 'a'); // Output: 'a'
// Explanation: The logical AND operator (&&) returns true if both operands are true, otherwise, it returns false. 
// If the first operand evaluates to false, the second operand is not evaluated.

// 2. Logical OR (||)
console.log('Logical OR (||)');
console.log('true || false:', true || false); // Output: true
console.log('10 == 20 || 20 == 33:', 10 == 20 || 20 == 33); // Output: false
console.log('true || true:', true || true); // Output: true
console.log('false || false:', false || false); // Output: false
console.log('0 || 1:', 0 || 1); // Output: 1
console.log('1 || 1:', 1 || 1); // Output: 1
console.log('1 || \'a\':', 1 || 'a'); // Output: 1
// Explanation: The logical OR operator (||) returns true if at least one of the operands is true, otherwise, it returns false. 
// If the first operand evaluates to true, the second operand is not evaluated.

// 3. Logical NOT (!)
console.log('Logical NOT (!)');
console.log('!(0):', !(0)); // Output: true
console.log('!(1):', !(1)); // Output: false
console.log('!(true):', !(true)); // Output: false
console.log('!(false):', !(false)); // Output: true
console.log('!(1 == 1):', !(1 == 1)); // Output: false
console.log('!(10 === 20):', !(10 === 20)); // Output: true
// Explanation: The logical NOT operator (!) negates the boolean value of its operand. 
// It returns true if the operand is false, and false if the operand is true.
