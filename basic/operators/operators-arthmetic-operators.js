/* The Javascript operators are symbols, that are used to perform operations on operands
these are following types of operations

1. Arthematic operators
2. Comparision operators
3. Bitwise operators
4. Logical operators
5. Assignement operators
6. special operators */
/* JavaScript Operators */

// Initialization
let a = 10;
let b = 5;

// 1. Arithmetic Operators
// Arithmetic operators are used to perform mathematical operations on numbers.

// Addition (+)
let c = a + b; // 10 + 5 = 15
console.log('Addition:', c);

// Subtraction (-)
c = a - b; // 10 - 5 = 5
console.log('Subtraction:', c);

// Multiplication (*)
c = a * b; // 10 * 5 = 50
console.log('Multiplication:', c);

// Division (/)
c = a / b; // 10 / 5 = 2
console.log('Division:', c);

// Modulus (%)
c = a % b; // 10 % 5 = 0 (no remainder)
console.log('Modulus:', c);

// Increment Operator (++)
// Post-increment (a++)
console.log('Post-increment:');
console.log('Value of a before increment:', a); // a = 10
console.log('Incremented value:', a++); // Post-increment: increment happens after the value is returned (so it logs 10 but updates to 11)
console.log('Value of a after increment:', a); // a = 11

// Pre-increment (++a)
a = 10; // Reset a to 10
console.log('\nPre-increment:');
console.log('Value of a before increment:', a); // a = 10
console.log('Incremented value:', ++a); // Pre-increment: increment happens before the value is returned (so it logs and updates to 11)
console.log('Value of a after increment:', a); // a = 11

// Decrement Operator (--)
// Post-decrement (a--)
console.log('\nPost-decrement:');
console.log('Value of a before decrement:', a); // a = 11
console.log('Decremented value:', a--); // Post-decrement: decrement happens after the value is returned (so it logs 11 but updates to 10)
console.log('Value of a after decrement:', a); // a = 10

// Pre-decrement (--a)
console.log('\nPre-decrement:');
console.log('Value of a before decrement:', a); // a = 10
console.log('Decremented value:', --a); // Pre-decrement: decrement happens before the value is returned (so it logs and updates to 9)
console.log('Value of a after decrement:', a); // a = 9
