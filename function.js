//normal function 
const hello = function (){
    console.log("hey I am nuri")  // normally function evabe lekhi 
    return "by ";   
}

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

