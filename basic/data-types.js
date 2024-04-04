/* In java script there are two types of data types 
1) primitive data types
2) non-primitive data types */

// 1) primitive data types are String, Number , Boolean, Undefined, Null

a='this is a string'             //this is a string
b="this is also a string"        // this is a string

c=20   // this is a number

d = true // this is a boolean value. it will have only 2 values either true or false
e = false // this is a boolean value

f= undefined // this is a undefined value

g= null // this represents null value


// 2) Non- Primitive data types

h = {name:'john', age:24, job:'Developer'}    // this is a object, it represents instance through which we can access members
console.log('h : ',h)

i=[1,2,3,4,5,6]              // this is a  array. it reprsents group of simmilar values
console.log('i : ',i)


// Reg Exp => this is a Regular expression
// Define a string
const text = "The quick brown fox jumps over the lazy dog.";

// Define a regular expression pattern to match any word that starts with the letter 'q'
// We define a regular expression pattern /q\w*/g. This pattern looks for the letter 'q' 
// followed by zero or more word characters (letters, digits, or underscores). The 
// 'g' flag indicates that we want to find all matches in the string (not just the first one). 
const pattern = /q\w*/g;

// Use the match() method of the string to find all matches of the pattern
const matches = text.match(pattern);

// Log the matches
console.log(matches); // Output: ["quick"]