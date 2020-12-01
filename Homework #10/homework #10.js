


/*

 we assign each element of array in another variable When we are destructuring arrays, but when we destructuring objects, then we assign desire 
 attribute in a single variable.


 */


 

// destructuring arrays
let array1 = [1,2,3,4,5];
const [num1, num2, , num4, ] = array1;
console.log(num1, num2, num4);

let users = [{ name: 'felix', age: 50}, { name: 'gerald', age: 73}];
const [felix, gerald] = users;
console.log(felix, gerald);


// destructuring objects
const {age} = felix;
console.log(`felix is ${age} years old.`);


for (const {name: n, age: a} of users) {
    console.log(`${n} is ${a} years old.`);
}




//EZEBUIRO UCHECHUKWU VINCENT