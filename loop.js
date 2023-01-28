
//while loop

// program to find the sum of positive numbers if the user enters a negative numbers, the loop end the negative number entered is not added to sum

let sum = 0;
let number = parseInt(prompt('Enter a number: '));
while(number >= 0) {
    sum += number;  // add all positive numbers
    number = parseInt(prompt('Enter a number: ')); 
}
console.log(`The sum is ${sum}.`);


//do while 
// to find the sum of positive numbers  if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)

console.log(`The sum is ${sum}.`);


=>JS for loop
=>JS for...in loop
=>JS for...of loop

//for loop
// program to display the sum of natural numbers..0 + 1 + 2 + ... + 100 count this way
let sum = 0;
const n = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}
console.log('sum:', sum);

//for..in loop
/*for (key in object) {
    // body of for...in
}*/

const salaries= {
    Nuri: 34000,
    Joy : 54000,
    Adi : 28000
}
for ( let i in salaries) {
    let salary = "$" + salaries[i];
    console.log(`${i} : ${salary}`);
}

//for...in with Strings
const string = 'Nuri';
for (let i in string) {
    console.log(string[i]);
}


//for...in with Arrays
const arr = [ 'nuri', 1, 'joy' ];
for (let x in arr) {
    console.log(arr[x]);
}

//for of loop 
/*for (element of iterable) {
}*/

//for...of with Arrays
const students = ['Ishmoth', 'Joy', 'Nuri'];   
for ( let element of students ) {    
    console.log(element);           
}
//for...of with Strings
const string = 'Nuri';
for (let i of string) { 
    console.log(i);
}

//for...of with Sets
const set = new Set([1, 2, 3]);
for (let i of set) { //  Set define in loop 
    console.log(i);
}

//for...of with Maps

let map = new Map();
map.set('name', 'nuri');
map.set('age', '22');
for (let [key, value] of map) { // looping in Map
    console.log(key + '- ' + value);
}









//joy
// while

let number =10;
console.log("while loop ==>")
while(number>=0){
    console.log(number);
    number-=2;
}
/*
for (initializer; condition; iterator) {
     statements
}
*/
number =10;
console.log("for loop ==>")
for(let i=5;i<=number;i++){
    console.log(i);
}

let j=8;
console.log("for loop ==>")
for(;j<number;j++){
    console.log(j);
}

j=10;
for(; ;){
    if(j>=12){
        break;
    }
    console.log(j);
    j++;
}

/*

for --> loops through a block of code a number of times
for/in --> loops through the properties of an object
for/of --> loops through the values of an iterable object
while --> loops through a block of code while a specified condition is true
do/while --> also loops through a block of code while a specified condition is true

*/

/*
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5

but in var case are different 

var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
*/


let person={
      name:'joy',
      last_name:'adhikary',
      id:062,
      dpt:'cse',
}

let array=[10,12,11,15,20];


//for(key in object_name) here key return the keys of the obj

// array er moddhe key diye indx bojhai .. obj a key diye key bujhai r array te indx , cz
//obj key value pair a theke r array indx basied 

for(let x in person ){
    console.log("key =>",x,"value =>",person[x]);
}

for(x in array){
    console.log(x,"==>",array[x]);
}

//Do not use for in loop over an Array if the index order is important.

// inherite obj eu for in kaj kore 

const person1 = new Object(person);
person1.university="BUBT";

for(key in person1){
    console.log("key =>",key," , value =>",person1[key])
}


//The JavaScript for of statement loops through the values of an iterable object.
// loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, 
// for ( value of object_name)
for ( x of array){
 console.log(x);
}

let joy1="joy_adhikary";
//both are same 
for(let i=0;i<joy1.length;i++){
    console.log(joy1[i]);
}

for(x of joy1){
    console.log(x);
}