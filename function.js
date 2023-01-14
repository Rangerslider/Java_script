//arrow function 
const hello = () => {
    console.log("hey I am nuri")
    return "hi";
}

function oneplusavg(x,y){
    return 1 + (x+y)/2
}
const sum = (p,q) =>{
    return p+q
}
let a=1,b=2,c=3,d= hello();
console.log(d);
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

