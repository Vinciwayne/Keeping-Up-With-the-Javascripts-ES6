'use strict';

/**
 * SPREAD OPERATOR:
 * 
 * Spread syntax allows an iterable such as an array expression or string to be expanded in places whe
 * re zero or more arguments (for function calls) or elements (for array literals) are expected, or an 
 * object expression to be expanded in places where zero or more key-value pairs (for object literals) 
 * are expected.
 * 
 */


/** use with an array */
const numbers = [1, 2, 3];
console.log('24: ', ...numbers);
// expected output: 1 2 3

console.log('27: ', numbers);
// expected output: [1, 2, 3]


/** use with a function */
function myFunction(x, y, z) {
  console.log('33: ', ...args);
}
const args = [0, 1, 2];
myFunction(...args);
// expected output: 0 1 2


/* copy an array */
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log('44: ', arr2);


/** shallow object cloning */
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) =>  { 
  console.log('51: ', ...objects)
};
const mergedObj = merge ( obj1, obj2);



/**
 * REST OPERATOR:
 * The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
 * A function's last parameter can be prefixed with which will cause all remaining (user supplied)
 *  arguments to be placed within a "standard" JavaScript array. Only the last parameter can be a 
 * "rest parameter".
 * 
 */
 
 
 /** using rest */
 function myFunction(a, b, ...manyMoreArgs) {
  console.log('73: a = ', a); 
  console.log('74: b = ', b);
  console.log('75: manyMoreArgs = ', manyMoreArgs); 
  console.log('76: manyMoreArgs = ', ...manyMoreArgs); 
}

myFunction('one', 'two', 'three', 'four', 'five', 'six');

// expected output:
// a = one
// b = two
// manyMoreArgs = [three, four, five, six]
// manyMoreArgs = three four five six





// EZEBUIRO VINCENT UCHECHUKWU 
 
 