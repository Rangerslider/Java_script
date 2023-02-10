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






