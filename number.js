/*let num = 20; 
num= toString(num); //num ke string e convert korer jonne
console.log (typeof(num));
 

// string to covvert int,float
let num = "20"; 
num= parseInt(num); //converte int 
num= parseFloat(num); //convert float
console.log (num);

//floating value fixed korer techmique 
let num1 = 34.567;
console.log(num1.toFixed(5)); // 34.56700
console.log(num1.toFixed(10)); // 34.5670000000

let num2 = 12.345678;

// default toFixed() method
console.log(num2.toFixed()); // 12
// 2 decimal places
console.log(num2.toFixed(2)); // 12.35
// 3 decimal places
console.log(num2.toFixed(3)); // 12.346
// 6 decimal places
console.log(num2.toFixed(4)); // 12.3457



// An octal literal number starts with the digit zero (0) followed by a sequence of octal digits (numbers from 0 through 7) 
let xx=071;
console.log(xx); // 57 ashbe so be careful 

let xxx=711;
console.log(xxx)  //711

// eita 88 e ashbe cz eita 0 er por 8 ashe which is not laying between 0 to 7

let yy=088;
console.log(yy);  // 88

let nuri;
nuri=0o11;
console.log(nuri)
*/







                ///Implicit Conversion to String
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

             ///Implicit Conversion to Number
result = '4' - '2'; 
console.log(result); // 2 // string formet in 2

result = '4' - 2;
console.log(result); // 2//without string formet in 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2

             ///Non-numeric String Results to NaN
result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN

            //Boolean Conversion to Number
 result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

            // null Conversion to Number
// null is 0 when used with number
result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4

               //undefined used with number, boolean or null
// Arithmetic operation of undefined with number, boolean or null gives NaN
result = 4 + undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN

                 //Convert to Number Explicitly
// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

                  ///Convert to Number Explicitly
result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20

//number to string
result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

                   //other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

                        // using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

