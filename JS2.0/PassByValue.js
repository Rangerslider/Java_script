//JavaScript pass-by-value or pass-by-reference
/*js e primituve values holo 5types jegulo ke passed type value bole (boolean, number, string, null, 
undefined). ar baki type holo object efer ke non primitve value bole (array, function, object)  -->
primitive values er 5ta type er kono value kono memory e allocate kora jae na je comman dea hoi setai fixed hisabe chole. */


//pass by value primitive data(string, booleans ,numbers, null,undefiend) type use kore ar pass by reference non-primitive(array & objects) 
// data type use kore .Pass by value independeted thake.

let a = 10;
let b = a;
b = a + 20;
console.log(a); //10
console.log(b); //30
//ekhane jokon ami b ke a er value pass kortesi tokkon se sei value nisse and jokon 20 add kortesi tokon
//a ar value thik rekhe b er value ke update kortese eta ke bole pass by value . 

let obj1 = {
    name: "nuri",
    age: 24,
};
let obj2 = obj1;
console.log(obj1); //{name: 'nuri', age: 24}
console.log(obj2); //{name: 'nuri', age: 24}

/*same processes e pass by value r moto object 1 er value pass kore disi object 2 ke and obj1 and 
 obj2 same value return kortese but jokon ami obj2 te kisu add korbo seita se reference hisabe
nibe and object 1 and object2 2tai change kore dibe karon obj reference hisabe nisse. */

let ob1 = {
    name: "nuri",
    age: 24,
};
let ob2 = ob1;
ob2.age = 25;
ob2.name = "joy";
console.log(ob1);//{name: 'joy', age: 25}
console.log(ob2); //{name: 'joy', age: 25}

let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
arr2.push(5);
console.log(arr1); //[1, 2, 3, 4, 5]
console.log(arr2); //[1, 2, 3, 4, 5]


//Ex:primitive

function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);

console.log(result); // 100 
console.log(y); // 10 -- no change


//non-primitive

let person = {
    name: 'nuri',
    age: 25,
  };
  
  function increaseAge(obj) {
    obj.age += 1;
    // obj.name = 'Joy'; 
  }
  increaseAge(person);
  console.log(person);
  