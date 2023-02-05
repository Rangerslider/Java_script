//normal function 
const hello = function (){
    console.log("hey I am nuri")  // normally function evabe lekhi 
    return "by ";   
}
// Arrow functions:
// Do not have 'this'
// Do not have 'arguments'
// Can’t be called with 'new'
// They also don’t have 'super class'
//arrow function 
const hello = () => {
    console.log("hey I am nuri")// arraow function e just function na lekhe arrow type korbp eta r  o fast kaj kor e 
    return "hi";
}
// esay arrow function
 hello = () => "hello world!";// ekbare function die by default e kora jae but problem eta just return kora jae tokon useful jodi let statement thake tokon use korle kaj hobe na 



function oneplusavg(x,y){
    return 1 + (x+y)/2
}
const sum = (p,q) =>{
    return p+q
}
let a=1,b=2,c=3,d= hello(), e= hel();
console.log(d);
console.log(e);
console.log("for a and b",oneplusavg(a,b));
console.log("for b and c",oneplusavg(b,c)); 
console.log("for a and c",oneplusavg(a,c));
console.log(sum (9,10))
//output :
// hey I am nuri
// hi
// for a and b 2.5    
// for b and c 3.5    
// for a and c 3      
// 19



// function er body je kno jaigai likhlei hoi , jmn eitai nice dice , to ei joy ke upr theke o call deya jaito

//below both function call are valid 

function joy(firstName, lastName) {
    return firstName + " " + lastName;
}

let x = joy("joy", "adhikary");
console.log(x);


let y = joy1("joy", "adhikary");
console.log(y);

function joy1(firstName, lastName) {
    return firstName + " " + lastName;
}


function check_empty(massage) {
    if (!massage) {
        console.log("empty");
    } else {
        console.log(massage);
    }
}

check_empty("joy");
check_empty(" "); // " " is not an empty bcz it contain space 
check_empty("");


// using default argument which act like an array but it is nott an array

function add() {  // function add(...args){ }  both are same 
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2, 3, 4, 5, 10));

//function which is stored in a variable , it is called anonymous function (a function without a name).
let ex = function (a, b) {
    return a * b;
}
//let z=ex(10,"string");//this will return nan as int * string 
let z = ex(10, 10.540);
console.log(z)


// number of perameter 
function myFunction() {
    return arguments.length;
}
let ex1 = myFunction(1, 2, 2);
console.log(ex1); // this will return number of parameter   


// function in obj

let joy2 = {
    name: "joy",
    lastName: "adhiakry",
    fullName: function () {
        return this.name + this.lastName;
    }
}
//let ex2=joy2.fullName; // this will return fullname type 
let ex2 = joy2.fullName(); // this will return fullname value
console.log(ex2);


//function in another function 

function add1(x) {
    return x + 10;
}

function minus(x) {
    return x - 10;
}

function joy3(x, y, z, xx) { //fun pass korse minus ejonno ami jei nam e dei nah kno kaj korbe minus er e 
    let sum1 = x + y + z;
    return xx(sum1);
}

let ex3 = joy3(10, 20, 10, minus);  // 30 
let ex4 = joy3(10, 20, 10, add1)    // 50 
console.log(ex3, ex4)




//  advanced topic 




// sorting of any key pair value 
function compareBy(propertyName) {
    return function (a, b) {
        let x = a[propertyName],
            y = b[propertyName];

        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    };
}
let products = [
    { name: "iphone", price: 100 },
    {
        name: "samsung",    // same as {name:"samsung",price:200},
        price: 200
    },
    { name: "iphone", price: 150 },
    {
        name: "joy",
        price: 1000000
    }
];

console.log("sorting by name ( first value");
console.log(products.sort(compareBy('name')));
console.table(products);

console.log("sorting by price ( 2nd value )");
console.log(products.sort(compareBy('price')));
console.table(products);



// https://www.javascripttutorial.net/javascript-pass-by-value/

let person1 = {
    name: 'joy',
    age: 23,
    sex: 'mail'
}

function pass_by_reference(obj) {
    obj.age += 1;
    obj.name = "joy_adhikary";

    // this modification  will not work cz 
    // when passing an object to a function, you are passing the reference of that object, not the actual object. Therefore, the function can modify the properties of the object via its reference.
    // so single properti access kora jabe but entire ta change kora jabe nah 
    obj = {
        name: 'joyxx',
        age: 234,
        sex: 'mail11'
    }
}

pass_by_reference(person1);
console.log(person1);


//A recursive function is a function that calls itself until it doesn’t. 

function sum3(number) {
    if (number <= 1) {
        return number;
    }
    else {
        return number + sum3(number - 1);
    }
}
let ex5 = sum3(10);
console.log(ex5);

// reusing same funtion using recurtion 
//num the parameter of the countdown() function, and the values passed to the countdown() function 6 is the arguments.
function countdown(num) {
    if (num <= 1) {
        return console.log(num);
    }
    else {
         console.log(num);
         countdown(num-1);
    }
}
let ex6 = countdown(6);


// default value 

function joy4( name='joy',id=062,dept='cse'){
   return {name,id,dept,} // { } use na korle just akta value return korto seita holo dept kintu akn akta full obj pass korbe 
   //return name,id,dept;  //try this 
}

let ex7=joy4();    //used default values 
console.log(ex7);

ex7=joy4(undefined,undefined,'EEE') // for 1st 2 perameters it will use the default values and for 3rd one it will use the argument values 
console.log(ex7);


// this one is for local value changes 

function joy5(toy,array=[]){
    array.push(toy)
    return array;
}
let ex8=joy5('joy adhikary');
console.log(ex8);

ex8=joy5('id 18192103062'); // joy adhikary, id 18192103062 hobe nah .. karon local change hoi just 
console.log(ex8);

// but this one will change in global value 

let array1=[];
function joy6(toy,array1){
    array1.push(toy)
    return array1;
}

let ex9 = joy6('joy adhiakry',array1);
console.log(ex9);

 ex9 = joy6('id 18192103062',array1);
 console.log(ex9); // console.log(array1) both are same .. and providing the same output 





                                 //Arrow Function

let func = function(arg1, arg2, ..., argN) {
    return expression;
};

