//nullish coalescing mean if the value is null or undefined then it will show the value of the variable
/*suppose amr kase ekta data ase jeta r value amake dekhaite hobe but amr value null or undefined kora 
ba amr value i dea nai tokon amra nullish oparetor use korbo. '||' => etar kaj holo or er kaj kore hoi
value ja ase ta show korbe or jeta define kora hosse oita dekhabe but prblm hosse ai or oparator e 
jodi num define kora thake and input value o num dea hoi tokon se input value i show kore .*/

let myValue = 0;
let num = myValue || 25;
let num1 = myValue ?? 25;
console.log(num);// ekhane 0 amr num so amake 0 show korar kotha chilo but input num 25 show kortese 
// ai prblm er jonno ?? nullish oparetor use kora hoi .
console.log(num1);// nullish oparetor je value dea ase oitai show korse.


let bike = "blade";
let a =bike || "xblade";
console.log(a);


// when it is undefined
let b = undefined;
let c = b || "rocket";
console.log(c);


// when it is null
let d = null;
let e = d || "nuri";
console.log(e);

//when it is " "
let f = "";
let g = f || "joy";
console.log(g);

//when it is 0
let h = 0;
let i = h || "xyz";
console.log(i);  

//when it is 0
let h1 = 0;
let i1 = h1 || "10";
console.log(i1);

//when Nullish Coalescing operator
let j = 0;
let k = j ?? "Joy Adhikary";
console.log(k);


let l = null;
let m = l ?? "Nuri";
console.log(m);

let n = undefined;
let p = n ?? "code";
console.log(p);


//do not show the value of the variable
let q = "";
let r = q ?? "10";
console.log(q);

//ex1:
const age = undefined ?? 28;
console.log(age);

//ex2:
const result = (null || undefined) ?? 'OK'; 
console.log(result); // 'OK'
/*ekhane output ok show korbe karon nullish oparator check kortese ager value null but same jinish tai 
jodi amra evabe lekhi,

const result = null || undefined ?? 'OK'; // SyntaxError

tahole error dibe karon nullish oparator e logical and ,or oparot combine korte pare na tai nulllish 
 oparator ke short circuit bola hoi.*/