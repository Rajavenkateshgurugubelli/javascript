// Comparison Operators in JavaScript

// Comparison operators are used to compare two operands and return a boolean value (true or false) based on the comparison result.

// 1. Equal to (==)
console.log('Equal to (==)');
console.log('10 == 20:', 10 == 20); // Output: false
console.log('10 == 10:', 10 == 10); // Output: true
console.log('10 == \'10\':', 10 == '10'); // Output: true
// Explanation: The '==' operator checks if the values of the two operands are equal. 
// It performs type coercion, meaning it converts operands to the same type before comparison. 
// So, 10 is equal to '10' because JavaScript converts the string '10' to a number before comparison.

// 2. Identical (===)
console.log('Identical (===)');
console.log('10 === 20:', 10 === 20); // Output: false
console.log('10 === \'10\':', 10 === '10'); // Output: false
// Explanation: The '===' operator checks if the values and types of the two operands are strictly equal. 
// Unlike '==', '===' does not perform type coercion. 
// So, 10 is not strictly equal to '10' because they are of different types.

// 3. Not Equal to (!=)
console.log('Not Equal to (!=)');
console.log('10 != 20:', 10 != 20); // Output: true
console.log('10 != \'10\':', 10 != '10'); // Output: false
// Explanation: The '!=' operator checks if the values of the two operands are not equal. 
// It performs type coercion similar to '=='. 
// So, 10 is not equal to '10' because they have different types.

// 4. Not Identical (!==)
console.log('Not Identical (!==)');
console.log('10 !== 20:', 10 !== 20); // Output: true
console.log('10 !== \'10\':', 10 !== '10'); // Output: true
// Explanation: The '!==' operator checks if the values or types of the two operands are not strictly equal. 
// It does not perform type coercion. 
// So, 10 is not strictly equal to '10' because they are of different types.

// 5. Greater Than (>)
console.log('Greater Than (>)');
console.log('10 > 5:', 10 > 5); // Output: true
console.log('5 > 10:', 5 > 10); // Output: false
console.log('10 > 10:', 10 > 10); // Output: false
// Explanation: The '>' operator checks if the left operand is greater than the right operand.

// 6. Greater Than or Equal To (>=)
console.log('Greater Than or Equal To (>=)');
console.log('10 >= 5:', 10 >= 5); // Output: true
console.log('5 >= 10:', 5 >= 10); // Output: false
console.log('10 >= 10:', 10 >= 10); // Output: true
// Explanation: The '>=' operator checks if the left operand is greater than or equal to the right operand.

// 7. Less Than (<)
console.log('Less Than (<)');
console.log('10 < 5:', 10 < 5); // Output: false
console.log('5 < 10:', 5 < 10); // Output: true
console.log('10 < 10:', 10 < 10); // Output: false
// Explanation: The '<' operator checks if the left operand is less than the right operand.

// 8. Less Than or Equal To (<=)
console.log('Less Than or Equal To (<=)');
console.log('10 <= 5:', 10 <= 5); // Output: false
console.log('5 <= 10:', 5 <= 10); // Output: true
console.log('10 <= 10:', 10 <= 10); // Output: true
// Explanation: The '<=' operator checks if the left operand is less than or equal to the right operand.
