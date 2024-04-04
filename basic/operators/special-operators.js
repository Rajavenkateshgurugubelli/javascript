// these are some of the special operators in javascript

//1. Teranary oprrator
let isAdmin = true;
let accessLevel = isAdmin ? "admin" : "user";

/* The ternary operator (? :) is a shorthand for an if-else statement. 
It evaluates the condition before the ?. If the condition is true, 
it returns the value before the :; otherwise, it returns the value after the :. 
In this example, depending on whether isAdmin is true or false, accessLevel will be set to "admin" or "user" accordingly. */

// 2. comma operator 
let a = 1, b = 2, c = 3;
/* The comma operator allows multiple expressions to be evaluated in a single statement. Here, we're declaring and 
initializing three variables (a, b, and c) in a single line.*/

//3.Delete Operator
let obj = {a: 1, b: 2};
delete obj.a;
/* The delete operator is used to remove a property from an object. In this example, we're deleting the property a from the object obj.*/

//4. Instanceof operator
class Car {}
let carInstance = new Car();
console.log(carInstance instanceof Car); // Output: true
/*The instanceof operator checks whether an object belongs to a specific class or constructor function. Here, we're checking 
if carInstance is an instance of the Car class. */

//5. new operator
function Person(name) {
    this.name = name;
}
let personInstance = new Person("John");
/*The new operator is used to create instances of user-defined object types. Here, we're creating an instance of the Person 
constructor function with the name "John". */


//6. Typeof Opearator
let x = 10;
console.log(typeof x); // Output: "number"
/*The typeof operator returns the data type of its operand. In this example, we're checking the data type of the variable x, which is a number. */

//7. void opearator
let url = "https://example.com";
//let result = void window.open(url);
/* The void operator evaluates an expression and then returns undefined. It's often used to obtain the undefined primitive value. 
In this example, we're using void to open a URL in a new window and assign the result to result, which will be undefined.*/

//8.Yeild Opearator 
function* generator() {
    yield 1;
    yield 2;
}
let gen = generator();
console.log(gen.next().value); // Output: 1
/* The yield operator is used in generator functions to pause and resume the execution of a function. In this example, 
we're defining a generator function generator, creating an instance of it (gen), and then calling next() to yield the next value in the sequence.*/



