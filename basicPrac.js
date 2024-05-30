/*------------data types--------*/ 
// There are 7 primitive data type
// 1. Number - Floating point number, Used for decimals and integers
// 2. String - Sequence of characters. Used in single/double quotes
// 3. Boolean - logical data type for decision making. true or false.
// 4. Undefined - Value taken by a variable that is not yet defined ('empty value'). Example: let children;
// 5. Null - Also means 'empty value'
// 6. Symbol (ES2015) - Not useful for us. Just defines value which is unique and cannot be changed
// 7. BigInt (ES2020) - Larger integers than the Number type can hold

// JS has dynamic typing:
// amra kokhono data type define korbo na jeta variable hisabe sttore ase karon eta automatically store kore 
// Value has data type in JS and not variable.
// We can assign new value with different data type to same variable but can leads to some error.


let bike = true;
console.log(bike); // true

// typeof oprator
console.log(typeof true); // boolean
console.log(typeof "text"); // string
console.log(typeof 23); // number

// new value in to the variable
bike = "Yes!";
console.log(bike); // out:Yes!

// Undefined values
let year;
console.log(year); 
console.log(typeof year); 

year = 1999;
console.log(year); // out: 1999


/*------------operators--------*/


// Assignment operators
let x = 10 + 5; // x = 15
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // x = x * 4 = 100
console.log(x);
x++; // x = x + 1 = 101
console.log(x);
x--; // x = x - 1 = 100
console.log(x);
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJoy > ageNuri); // >, <, >=, <=, ==, ===, !=, !==
console.log(ageNuri >= 18);

const isFullAge = ageNuri >= 18;
console.log(isFullAge);

// Logical operators
const a = 5, b = 3;
console.log(a < 6 && b < 5); // true

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false
