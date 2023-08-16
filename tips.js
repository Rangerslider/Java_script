 1 . issa moto number pass korty parbo ... er jonno

function sum(...joy){
    let total=0;
    for(let i of joy){total+=i}
  return total;
}

console.log(sum(1,2,3,4))
console.log(sum(1,4))
console.log(sum(1,2,4))


2. const er majhe value change kora jai .

const joy={ name: " joy ", id:62 }
joy.id=00;
console.log(joy) // joy 00


3. copy related 

const joy ={ name: " joy ", id:62 }
const roy=joy;
roy.id=55;
console.log(joy) // it will change the value of joy.id also.

//to avoid it we can use  this ( ... )
const joy={ name: " joy ", id:62 }
const roy={...joy};
roy.id=00;
console.log(joy) // it will not change joy.id 




1.for loop 
const numbers=[25,55,62,22];
for(let i =0;i<numbers.length; i++){
    console.log(numbers[i]*2);         //50,110,124,44
}



2.while loop 
let i=0;
while(i<numbers.length){
    console.log(numbers[i]*2);
    i++;         //50,110,124,44
}


3.do-while loop
do {
    console.log(numbers[i]*2);
    i++;
}
while(i<numbers.length);



4.for-of -loop
for(const num of numbers){
    console.log(num*2);
}



5.for-in -loop
const nuri={
    1: 44,
    2:62,
    3:46,
    4:58
};
for(const num  in numbers){
    console.log(numbers[num]*2);
}


6.map loop 
const doubleofNumbers = numbers.map(num=>{
    return num*2;
})



7.for-each loop 
numbers.forEach(num=>{
    console.log(num*2);
})


8.short process of for loop 
const fruits  = ['mango', 'banana', 'berry'];
for (let i= 0; i<fruits.length ;i++){
    const fruit = fruits[i];
    console.log(fruit);
}
///short =>
for (let fruit of fruits) console.log(fruit);




9.Turnary oparetor 
let x=true;
if(x= true){
  console.log("its true");
}
else{ console.log("false");
}
//short =>
 x?console.log("its true") : console.log("false")  //if condition ? ( if ture then execute this block ) : ( if false then execute this block )



 10.
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



11. assigning value in a short way 

let x;
if (data.name){
    x=data.name}
else x=6666;

eitar equivalent holo 
let x=data.name || 6666


12. filter unique values
const array = [1,1,2,3,6,6,3,1]
const UniqueArray = [...new Set(array)];
--result :[1,2,3,6]


13.Convert to boolean 
const isTrue =!0; //short unique technique
const alsoFalse =!!0;


//14. Convert to string
const val = 5 + "";
result: 5 and typeof val : string


15. Convert to int
let int ="15";
int = +int;
result:15 typeof int: number


16. Convert float to int
const int = 19.8 | 0;
result: 19 typeof int : number


17. remove last digits
const int = 1553/10 |0 ;;
result : 155 typeof int : number


18. truncate an array
let array = [0,1,2,3,4,5];
array.length = 3;
result :[0,1,2]


19.last item in array
let array = [0,1,2,3];
array.Slice(-1);
result:[3]


20.assigning and accing at the same time 

const joy = {} 
joy.name="joyAdhikary" / joy["name"] = "joyAdhikary"    // creating and assign property at the same time 
console.log(joy)  // {name : joyAdhikary } 




21.map vs foreach 

so basically  akta methes ashe je foreach modify kore r map array ke modify kore nah . but this steatment is not true .
lets see an example : 

let arr1=[1, 2, 3, 4 ]
let result1=arr1.foreach( (x,i,a)=>( a[i]=x*2 ))
console.log( "array 1 is ", result1) // undefined 

let result2=arr1.map( (x,i,a)=>( a[i]=x*2 ))
console.log( "array 1 is ", result1)  // 2 4 6 8 



