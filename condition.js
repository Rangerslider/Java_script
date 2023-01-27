//if-else 
let age = 19, state = 'BD';

if (age <= 19 && state == 'BD') {
    console.log("as like c++ but not support and,or but support && ,||  ")
} else {
    console.log("hey");
}

//Ternary Operator

let ex9 = (age <= 19 && state == 'BF' ? "if part execute" : "else part");
console.log(ex9);


console.log(age <= 19 && state == 'BD' ? "if part execute" : "else part");


let nuri = true, id = 06;

if (nuri) {
    if (id >= 262) {
        console.log("true");
    } else {
        console.log("partially true");
    }
} else {
    console.log("false");
}


console.log(`value is ${nuri ? "ture" : "false"}`);
//                  coditon ? if_part : else part 


let speed = 90;
let massage1 = " ";
if (speed >= 120) {
    massage1 = 'Too Fast';
} else {
    if (speed >= 80) {
        massage1 = "Fast";
    } else {
        massage1 = 'ok';
    }
}
console.log(massage1);

// using ternary oparetor 

let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';
console.log(message);


//        switch 

// if multiple case matches a case then 1st one will be executed 
// if no case matching with the given case then default case will be execute 
//if no default case found and no case match then it will skip the switch case block and execute the next block


let day, num = 2;

switch (num) {
    case 1:
        day = 'saturday';
        break;
    case 2:
        day = 'sunday';
        break;
    case 3:
        day = 'monday';
        break;
    default:
        day = "not a valid weekday";
}
console.log(day);

//switch case work like this if else one
/*

if (expression === value1) {
    statement1;
  } else if (expression === value2) {
    statement2;
  } else if (expression === value3) {
    statement3;
  } else {
    statement;
  }

  */
// sharing code with multiple case 

let numm = 3,msg;
switch (numm) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        msg = "its odd";
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        msg = "its even";
        break;
}
console.log(msg);

//Nested if...else Statement
// check if the number is positive, negative or zero
const number = prompt("Enter a number: "); // promopt dose not work here cs priviosu num was initially input 

if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}
