/* The Javascript operators are symbols, that are used to perform operations on operands
these are following types of operations

1. Arthematic operators
2. Comparision operators
3. Bitwise operators
4. Logical operators
5. Assignement operators
6. special operators */

a=10
b=5

// 1. Arthematic operations can be performed using Arthematic operators like following


// Addition +
c=a+b          //15
console.log('addition of a+b =',c)

//Substraction
c=a-b          // 5
console.log('substraction of a-b =',c)

//Multiply
c=a*b     //50
console.log('multiply of a*b =',c)

//Divide => this gives the qoutient part of the division
c=a/b    //2
console.log('division of a/b =',c)

//Modulus => this gives the reminder part of the divison
c=a%b //0
console.log('modulus of a%b =',c)

//increment operator => this got 2 types pre(++a) and post(a++)
console.log('value of a before post increment =',a) // value of a is 10
console.log('increment of a',a++)          // the value is incremented a is updated after the value of a is logged in console as 10
console.log('value of a after post increment =',a)   // here we can see the value is logged in console with the updated value of a is 11 

// to get the updated value of a. we can use the pre increment
a=10
console.log('value of a before pre increment =',a)     // the  value of a is 10 here 
console.log('increment of a',++a)                      // the value is updated to 11 here and the logged as 11 here. the operation is done first and assignned later the value was logged
console.log('value of a after pre increment =',a)      // as it was updated earlier we will get the same value of a as 11.


