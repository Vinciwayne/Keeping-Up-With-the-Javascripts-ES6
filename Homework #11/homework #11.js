/*
 Exceptions
 */

/*
To convert items from JS to JSON, you can use this function:

JSON.stringify()

To convert JSON back to Javascript use:

JSON.parse()



*/


function reverseJsonArray(string) {

    let parsed;
    try{
        parsed = JSON.parse(string);
    }catch (e) {
        return false;
    }

    if (!Array.isArray(parsed)) return false;

    return parsed.reverse();
}

console.log(reverseJsonArray("dasd"));
console.log(reverseJsonArray(123));
console.log(reverseJsonArray([1,2,3]));

let array = JSON.stringify([1,2,3]);
console.log(reverseJsonArray(array));


// EZEBUIRO UCHECHUKWU VINCENT 