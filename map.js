
/*

A Map holds key-value pairs where the keys can be any datatype.
key gula order maintain kore dukhe like 3 4 1 dile oita 1 3 4 vabe print korbe 

new Map()	it will Create a new Map
set()	    Sets the value for a key in a Map
get()	    Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	    Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map




/// joy


*/

// insert map 

//method 1 : using new map => akta array direct push kore dei 

let joy1 = new Map(
    [
        ["apples", 500],
        ["bananas", 300], // str int 
        ["oranges", 200],
        ["joy", "adhikary ( string )"], // str str 
        [14, "Number"], // int str 
        ['c', "Character"] // char str 
    ]
);

// get one value using key 

let value = joy1.get("apples");
console.log(value);

for (let values of joy1) {
    console.log(values);
}


//method2 create map first then add one by one using set 

let joy2 = new Map();

joy2.set("key", "value");
joy2.set("key can be anythings", "value can be anythings");
joy2.set(12, 12);
joy2.set('ch', "str");

for (let values of joy2) {
    console.log(values);
}

console.log("same as simple for loop  ");

for (let y of joy2.entries()) {
    console.log(y);
}

// print only value  using  .values()

for (let only_value of joy2.values()) {
    console.log(only_value);
}
// size of map = joy2.size;

// delete any item using key  => joy2.delete("key")

// chek if any item exist or not using key => joy2.has("key")


let jhon = { name: "joy" },
    jhon2 = { name: "adhikary" };

let joy3=new Map([
    [jhon,"obj key , string value"],
    [jhon2,"same"]
])

for(let only_key of joy3.keys()){
    console.log(only_key);
}
// inside key properti

for(let only_key of joy3.keys()){
    console.log(only_key.name);
}




//nuri
// create a set
let map1 = new Map();
let map2 = new Map();
map1.set('info', {name: 'nuri', age: 22});
console.log(map1); // Map {"info" => {name: "Jack", age: 22}}

// Map with object key
let obj = {};
map2.set(obj, {name: 'joy', age: "22"});
console.log(map2); // Map {{} => {name: "Joy", age: "22"}}

// access the elements of a Map
console.log(map1.get('info')); 
const set1 = new Set([1, 2, 3]);


// check if an element is in Set
console.log(map1.has('info')); // true

// removing a particular element
map1.delete('address'); // false
console.log(map1); 
console.log(map1.size); // 1

// using forEach method()
map1.set('name', 'Joy');
map1.set('age', '23');

// looping through Map
map1.forEach(function(value, key) {
  console.log(key + '- ' + value)
})