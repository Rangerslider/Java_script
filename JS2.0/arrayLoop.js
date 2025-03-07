
//array

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1,2,3,4,5,6] concate means 2 ta arrary ke eksathe jog kora

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);  //  [1,2,3,4,5,6] push means ekta item add korbe end theke
numbers.pop();         //  remove korbe ekta item end theke
numbers.shift(); //  remove korbe ekta item start theke
numbers.unshift(0);  //add korbe ekta item start theke

//array create  er  way
const shoppingCart = ['Milk','Coffee','Tea', 'Honey'];
const todoList = [
  {
    task:'JavaScript',
    time:'10:00',
    completed:true
  },
  {
    task:'gsap',
    time:'2:00',
    completed:false
  },
  {
    task:'css',
    time:'6:00',
    completed:false
  }
]

console.log(shoppingCart);
console.log(todoList);


//loops
//for loop  evabe  index na dhore ekbare for off die korle same vabe kaj korbe & for..in 
// For Loop

let num = [3, 5, 1, 2, 4]

for(let i=0; i<num.length;i++){
  console.log(num[i])
}

// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
let name = "nuri"
let arr = Array.from(name)
console.log(arr)

// for...of 
for (let i of num){
  console.log(i)
}

// for...in
for (let i in num){
  console.log(num[i])
}


// array mapping  filter and reduce 
/*Array mapping: mapping holo array er 
let array = [45, 23, 21]
let a = array.map((value, index) => {
  console.log(value, index, array)
  return value + index
})
console.log(array)

/*Array filter: filter holo array er moddhe ami condition diye kono ekta value select kore dilam je ami 
10 theke choto value gulo chassi to filter sei choto value gulo check kore output dibe  */
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
// console.log(a2, arr2)

/* Array reduce: ekhane ami ekta function disi jeta h1 and h2 jog kore return korbe ekhane h1 functionally 
array r startindex and 2nd index ke nie jog kortese , so h1 = 1  and h2 = 2 == 3, now h1= 3 & h2= 3 == 6 , 
h1=6 & h2= 5 == 11 , h1 = 11 & h2 = 2 == 13 , h1 = 13 & h2 = 1 == 14 , so the final output is 14    */
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)
