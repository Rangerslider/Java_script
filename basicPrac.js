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



// Boolean 
const age = 16;
const c = age >= 20; //false
const d = age < 30; //true

// NOT operator
console.log(!a); //true

// AND operator
console.log(a && b); //false
console.log(!a && b); //true

// OR operator
console.log(a || b); //true
console.log(a || !b); //false


// ---------logical-operators
const code1 = true;
const code2 = false;

console.log(code1 && code2); // -- false
console.log(code1 || code2); // -- true
console.log(!code1); // -- false

const isTired = false;

if (code1 && code2 && !isTired) {
  console.log("code run in dev!");
} else {
  console.log("code is wrong");// eta print hobe
}


///-------conditional-ternary-operator--------
const age2 = 23;
age2 >= 18
  ? console.log("Biker") 
  : console.log("Driver");

// Operators always produce a value
const challange = age >= 18 ? "Biker" : "Driver";
console.log(challange); // → Biker

let challange2;
if (age2 >= 18) {
  challange2 = "Biker";
} else {
  challange2 = "Driver";
}
console.log(challange2); // → Biker

