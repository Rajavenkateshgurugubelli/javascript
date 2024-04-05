//The for loop is used to iterate over a block of code a specified number of times.
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    console.log('hello world')
}

//The while loop repeats a block of code as long as a specified condition is true.
i = 0;
while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
}

//The do...while loop is similar to the while loop, but it executes the block of code once before checking the condition.
i = 0;
do {
    console.log(i); // Output: 0
    i++;
} while (i < 0);

//The for...in loop iterates over the enumerable properties of an object.
//The for...in loop iterates over the enumerable properties of an object, 
//including array indices, object keys, and other enumerable properties. Let's go through examples for each type of iterable object:

//Arrays (using indices):
const array = [1, 2, 3];
for (let index in array) {
    console.log(index); // Output: 0, 1, 2
}

/*Please note that using for...in with arrays can iterate over all enumerable properties, including array indices, which may not always 
be what you want. It's generally recommended to use for...of with arrays for iterating over their elements directly. For iterating 
over object properties, for...in is commonly used. */

//Objects (using keys):
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key); // Output: 'a', 'b', 'c'
}

//Strings (using indices):
const string = 'Hello';
for (let index in string) {
    console.log(index); // Output: 0, 1, 2, 3, 4
}

//Maps (using keys):
const myMaps = new Map();
myMaps.set('a', 1);
myMaps.set('b', 2);
myMaps.set('c', 3);

for (let key in myMaps) {
    console.log(key); // Output: 'a', 'b', 'c'
}

//Sets (using indices, but not recommended):
const mySets = new Set([1, 2, 3]);
for (let index in mySets) {
    console.log(index); // Output: '0', '1', '2'
}

//Arguments Object (using indices):
function sum() {
    for (let index in arguments) {
        console.log(arguments[index]);
    }
}

sum(1, 2, 3); // Output: 1, 2, 3



//The for...of loop iterates over the iterable objects such as arrays, strings, maps, sets, etc.

//Arrays:
const arr = [1, 2, 3];
for (let num of arr) {
    console.log(num); // Output: 1, 2, 3
}

//Strings:
const str = 'Hello';
for (let char of str) {
    console.log(char); // Output: 'H', 'e', 'l', 'l', 'o'
}

//Maps:
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

for (let [key, value] of myMap) {
    console.log(key, value); // Output: 'a' 1, 'b' 2, 'c' 3
}


//Sets:
const mySet = new Set([1, 2, 3]);
for (let num of mySet) {
    console.log(num); // Output: 1, 2, 3
}

//Arguments Object:
function sum() {
    let total = 0;
    for (let num of arguments) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3)); // Output: 6 (1 + 2 + 3)

//Custom Iterable Objects:
const myIterable = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (let num of myIterable) {
    console.log(num); // Output: 1, 2, 3
}

