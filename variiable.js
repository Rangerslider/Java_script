
// JavaScript uses the keywords var, let and const to declare variables.

var nuri; //var &let same kaj kore majemodde ektu different kaj kore 
let ishmoth=55;
let num;
num =10;
ishmoth ="Ishmoth ura nuri";

console.log(nuri,num,ishmoth );

let counter = 120; // counter is a number
counter = false;   // counter is now a boolean
counter = "final output will be in string , this is the beauty of js ";   // counter is now a string
console.log(counter)

// multiple variable declare at a time 

let person = "nuri",
carName = "Audi",
price = 500000;


console.log(person,carName,price);

// it is another way to declare 

var person1 ="ishmoth ura nuri ",car="BMW",price1=60000000;

console.log(person1,car,price1)



// another way 

var nuri,mnu,hlw;

nuri=10,mnu="hey boss",hlw="xxx"; // same line a different  data type er value assign kora jai . ==> int , string , string 

console.log(nuri,mnu,hlw)

var globalVar = "global variable";
function showVariables() {
  console.log(globalVar); //global variable function creat kore 
var localVar = "local variable";
  console.log(localVar); //local variable
};
showVariables();