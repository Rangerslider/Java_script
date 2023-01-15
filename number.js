let num = 20; 
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

