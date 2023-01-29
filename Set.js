
/*
just store unique values 
new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists in the Set
forEach()	Invokes a callback for each element in the Set
values()	Returns an iterator with all the values in a Set
clear()  – removes all elements from the Set object.
delete(value) – deletes an element specified by the value.
*/

//normal
const nuri = new Set(); 
console.log(nuri); //out: Set {}

// Set with multiple types of value
const joy = new Set([1, 'hello', {count : true}]);
console.log(joy); //out: Set {1, "hello", {count: true}}

// Set with duplicate values
const ishmoth = new Set([1, 1, 2, 2]);
console.log(ishmoth); //out: Set {1, 2}
console.log(ishmoth.values()); //out:[Set Iterator] { 1, 2 }
console.log(joy.has(1));//out:true // access the elements of a Set we can access Set elements using the values() method and check if there is an element inside Set using has()

/*Removing Elements:clear(),delete()
set.delete(2);
set.clear();
console.log(set.values());*/

//Set elements using the for...of loop or forEach() method
const set = new Set([1, 2, 3]);
for (let i of set) {
    console.log(i);
}

//joy
let joy = new Set(["a", "b", "c", "d", "e", "f"]);

console.log("using normal value ")
for (let value of joy) {
    console.log(value);
}
console.log("using keys ")
for (let key of joy.keys()) {
    console.log(key);
}
console.log("using values ")
for (let value of joy.values()) {
    console.log(value);
}


// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c")
    .add("c") // this will work 
    .add("x");

for (let value of letters) {
    console.log(value);
}





///Mathematical Set Operations
//  union operation
function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}
let setA = new Set(['apple', 'mango', 'orange']);
let setB = new Set(['grapes', 'apple', 'banana']);
let result = union(setA, setB);
console.log(result);

//Intersection Operation
function intersection(a, b) {
    let intersectionSet = new Set();

    for (let i of b) {
        if (a.has(i)) {
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}
let result1 = intersection(setA, setB);
console.log(result1);

// Difference operation

function difference(setA, setB) {
    let differenceSet = new Set(setA)
    for (let i of setB) {
        differenceSet.delete(i)
    }
    return differenceSet
}
let result2 = difference(setA, setB);

console.log(result2);

//Subset operation
function subset(setA, setB) {
    for (let i of setB) {
        if (!setA.has(i)) {
            return false
        }
    }
    return true
}
let result3 = subset(setA, setB);
console.log(result3);