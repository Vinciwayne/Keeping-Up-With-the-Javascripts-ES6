/*
 In javascript before ES6 we had these two scopes- 
global and local
with my understanding 
global scope is when variables are declared outside any function
(we use the term globally declared)
local scope is when variables are declared inside any function
(we use the term locally defclared)
*/
//variables are containers for storing data values.
// block scope was introduced with es6
//variables declared with the var keyword cannot have Block Scope
// Variables declared with the let keyword can have Block Scope.
//Variables declared with const is similar to let , except const cannot be reassigned
//block Scope - A block is a chunk of code bounded by {}.
// A block lives in curly braces 





/*
javascript hoisting 


Hoisting is a JavaScript mechanism where variables and function
 declarations are moved to the top of their scope before code execution.



hoisting - a variable can be declared after it has been used
                    0r
        a variable can be used before it has been declared




*/



//var
//these two examples below brings out the same output

//eg 1


// here a variable is declared after it has been used
a = 6; // Assign 6 to a


console.log(a)

var a; // Declare a

//eg 2


// here a variables is declared before it is used
var b; // Declare b
b = 64; // Assign 64 to b
console.log(b)





// NOTE:
// With var you can use a variable before it is declared





// let 

// this code will work
let carName; // declare carName

carName = "Volvo";  // assign volvo to carName

console.log(carName)


// this code will not work
fishName = "tilapia";  // assign tilapia to fishName 


console.log(fishName)


let fishName; // declare fishName



// const

// A const variable cannot be used before it is declared:
// const cannot be reassigned 
// you must assign a value to const once declared


   


// END OF HOISTING






////////EXAMPLES OF VAR, LET AND CONST





//var



var x = 80;
// x is 80  Here 
{
  var x = 67;
  //  x is 67  Here 
}
// x is 67 Here

console.log(x)

/*
NOTE:
the problem with var is that 
If you have used x in other parts of my code, 1 might be surprised at the 
output you might get.This will likely cause a lot of bugs in my code. This is why
 let and const are necessary.
*/










//let 



/*let can be updated but not re-declared.
Just like var,  a variable declared with let can be updated within its scope.
 Unlike var, a let variable cannot be re-declared within its scope. */

var y = 30;
//  y is 30  Here 
{
  let y = 49;
  // y is 49  Here 
}
// y is 30  Here 

console.log(y)

or


let greeting = "say Hi";
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined because it's not inside the block cope









//const



/*Variables declared with the const maintain constant values,
const cannot be updated or re-declared*/
// the  simiarity between const and let 

var z = 10;
//  z is 10 Here
{
  const z = 2;
  //  z is 2 Here
}
// z  is 10 here

console.log(z)





// EZEBUIRO UCHECHUKWU VINCENT











 
