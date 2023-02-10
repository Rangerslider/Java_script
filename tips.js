//  1 . issa moto number pass korty parbo ... er jonno

function sum(...joy){
    let total=0;
    for(let i of joy){total+=i}
  return total;
}

console.log(sum(1,2,3,4))
console.log(sum(1,4))
console.log(sum(1,2,4))


// 2. const er majhe value change kora jai .

const joy={ name: " joy ", id:62 }
joy.id=00;
console.log(joy) // joy 00


// 3. copy related 

const joy ={ name: " joy ", id:62 }
const roy=joy;
roy.id=55;
console.log(joy) // it will change the value of joy.id also.

//to avoid it we can use  this ( ... )
const joy={ name: " joy ", id:62 }
const roy={...joy};
roy.id=00;
console.log(joy) // it will not change joy.id 






//1.for loop 
const numbers=[25,55,62,22];
for(let i =0;i<numbers.length; i++){
    console.log(numbers[i]*2);         //50,110,124,44
}



//2.while loop 
let i=0;
while(i<numbers.length){
    console.log(numbers[i]*2);
    i++;         //50,110,124,44
}


//3.do-while loop
do {
    console.log(numbers[i]*2);
    i++;
}
while(i<numbers.length);



//4.for-of -loop
for(const num of numbers){
    console.log(num*2);
}



//5.for-in -loop
const nuri={
    1: 44,
    2:62,
    3:46,
    4:58
};
for(const num  in numbers){
    console.log(numbers[num]*2);
}



//6.map loop 
const doubleofNumbers = numbers.map(num=>{
    return num*2;
})



//7.for-each loop 
numbers.forEach(num=>{
    console.log(num*2);
})






///8.short process of for loop 
const fruits  = ['mango', 'banana', 'berry'];
for (let i= 0; i<fruits.length ;i++){
    const fruit = fruits[i];
    console.log(fruit);
}
///short =>
for (let fruit of fruits) console.log(fruit);




//9.Turnary oparetor 
let x=true;
if(x= true){
  console.log("its true");
}
else{ console.log("false");
}
//short =>
 x?console.log("its true") : console.log("false")  //if condition ? ( if ture then execute this block ) : ( if false then execute this block )



 //10.
 const Obj = {
  data:{
      
      name :"nuri",
      id: "237",
      class: "12",
  }
};
const name=obj.data.name ;
const id=obj.data.id;
const class =obj.data.class;

//eitar equivalent holo short=>
const {name,id,class} = Obj.data;



//11.assigning value in a short way 

let x;
if (data.name){
    x=data.name}
else x=6666;

eitar equivalent holo 
let x=data.name || 6666