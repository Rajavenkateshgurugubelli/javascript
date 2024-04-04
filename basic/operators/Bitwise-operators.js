// Bitwise Operations in JavaScript

// Bitwise operations are performed on the binary representation of numbers. 
// Each operand is converted to binary, then the operation is performed on each pair of corresponding bits, and finally, the result is converted back to a number.

// 1. Bitwise AND (&)
// The bitwise AND operator '&' compares each bit of the first operand to the corresponding bit of the second operand. 
// If both bits are 1, the corresponding result bit is set to 1, otherwise, it's set to 0.
console.log('Bitwise AND:', 10 == 20 & 20 == 33); // Output: 0
// Explanation: In binary, 10 is 1010 and 20 is 10100. Performing AND operation on corresponding bits, we get 0, as no bits are set to 1 in both numbers.

// 2. Bitwise OR (|)
// The bitwise OR operator '|' compares each bit of the first operand to the corresponding bit of the second operand.
// If either of the bits is 1, the corresponding result bit is set to 1, otherwise, it's set to 0.
console.log('Bitwise OR:', 10 == 20 | 20 == 33); // Output: 0
// Explanation: In binary, performing OR operation on corresponding bits, we get 0, as no bits are set to 1 in either number.

// 3. Bitwise XOR (^)
// The bitwise XOR operator '^' compares each bit of the first operand to the corresponding bit of the second operand.
// If the bits are different (one is 0 and the other is 1), the corresponding result bit is set to 1, otherwise, it's set to 0.
console.log('Bitwise XOR:', 10 == 20 ^ 20 == 33); // Output: 0
// Explanation: In binary, performing XOR operation on corresponding bits, we get 0, as no bits are different in both numbers.

// 4. Bitwise NOT (~)
// The bitwise NOT operator '~' inverts each bit of the operand, turning 1s into 0s and 0s into 1s.
console.log('Bitwise NOT:', ~10); // Output: -11
// Explanation: In binary, the bitwise NOT operation inverts each bit of the number. 
// So, ~10 is calculated as -(10 + 1), which results in -11.

// 5. Bitwise Left Shift (<<)
// The bitwise left shift operator '<<' shifts the bits of the first operand to the left by the number of positions specified by the second operand.
console.log('Bitwise Left Shift:', 10 << 2); // Output: 40
// Explanation: In binary, shifting the bits of 10 (1010) two positions to the left, we get 101000, which is equivalent to 40 in decimal.

// 6. Bitwise Right Shift (>>)
// The bitwise right shift operator '>>' shifts the bits of the first operand to the right by the number of positions specified by the second operand.
console.log('Bitwise Right Shift:', 10 >> 2); // Output: 2
// Explanation: In binary, shifting the bits of 10 (1010) two positions to the right, we get 10, which is equivalent to 2 in decimal.
