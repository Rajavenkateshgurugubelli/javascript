/* the scope of the variable is can be categorised as 2 types local and global
the local variable can be accessed only in the scope it id defined
the global variable can be defined throught the program */

//local variable

function local(){
    a=5                          // this 'a' value is not aceesiable outside the local function
    console.log('a =',a) 
}

local()

// console.log(a)         if you try this outside it will throw an error. as it was not defined outside the function



//global variable

b=10
function global(){
b=5
}

console.log('b =',b)