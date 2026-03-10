//-------object Literals------:
/*object er vitore keys and values er khaini thake ja array te thake na jemon name :nuri ekhane name 
keys and nuri values but array te array er vitore sob values dear lagto ejonno jokon amara acess korte jaitam
j tokon console.log die oi array er index hisabe access korer lagto but object er khetre amra name(key) die define
korte parbo ba values die o define korte parbo 
    1. by default key ke object e string hisabe dhore
    2. amra object access korer jonne always . use kore acess kori (.) console.log(user.email)kintu eta right way na right way hocche
    brackates er moddhe string hisabe acess kora console.log(user["email"]). 
    
*/

const user = {
  name: "nuri",
  age: 26,
  location: "dhaka",
  email: "nuri@gmail.com",
  worklog: ["fri", "sat"],
};

console.log(user.email);
console.log(user["email"]);

//-----symbol declear------:
//ques: symbol nie object e print kora
const mySym = Symbol("key1");
const user1 = {
  name: "nuri",
  age: 26,
  //   mySym:"mykey1",
  [mySym]: "mykey1",
  location: "dhaka",
  email: "nuri@gmail.com",
  worklog: ["fri", "sat"],
};
console.log(user1.mySym); // ekhane mykey1 print hocche but symbol hocche na ejonno object e declear korer jonno [] bracket er moddhe declare korle oita symbol hoi
console.log(user1[mySym]);

// ekhane freeze kore dear karone jokon amra name values chage kore dicchi seta change hobe na
// object.freeze(user)
user.name = "joy";

//------function--------:
user.num = function () {
  console.log("hi");
};
console.log(user.num());

user.num1 = function () {
  console.log(`hi,${this.name}`); // object ke function er moddhe acess korte chaile evabe lekhte hoi.
};
console.log(user.num1());


/* 
singleTarn Object: const nuri = new Object()
Non singleTarn Object: const nuri = {}
*/

//----------object Declare & nested Object declare & acess--------:
//----basic object---:
const Car = {};
Car.name = "Chr";
Car.id = "123cop";
Car.regestire = false;
console.log(Car);

//---nested Object---:
const regularUser = {
  email: "nuri@gmail.com",
  fullname: {
    userName: {
      firstName: "Ishmoth",
      lastName: "Nuri",
    },
  },
};
console.log(regularUser.email);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userName);
console.log(regularUser.fullname.userName.lastName);

/*suppose ekhane fullname exit kore na project e kothao fullname exit kore na tokon optional chaining 
nam e ekta syntax ase (?) eta tokon bujae je fullname jodi nao thake tahole porer ta onekta if-else er kaj 
kore api theke response er time e emnta korer lage  */




//-----------object Marge----------: 
/*array er moto just object eksathe die dile object hisebei marge hoi alada alada kintu amra chai 2ta object 
ke marge kore ekta object e ana ejonno object assign use korbo.

      1. object.assign (): javaScript-এ একটি method যা এক বা একাধিক object এর properties অন্য একটি object এ copy করে।
      syntax: Object.assign(target, source1, source2, ...)target → যেই object এ data copy হবে source → যেই object থেকে data আসবে

      2.object.keys(): এটা object এর সব property name (keys) array হিসেবে return করে মানে object এর property গুলোর নাম পাওয়া যায়।
      3.object.values(): এটা object এর সব value array হিসেবে return করে মানে object এর value গুলো পাওয়া যায়।
      4.Object.entries(): এটা key + value pair array আকারে return করে এটা loop করার সময় খুব useful।
      5.Object.hasOwnProperty(): Object এ property আছে কিনা check করে।
      6.Object.freeze() : Object read-only করে দেয়।
      7.Object.seal(): Property change করা যাবে কিন্তু new property add করা যাবে না।
      8.Object.fromEntries() : entries কে আবার object বানায়।
      9.Object.create(): Prototype দিয়ে নতুন object তৈরি করে।
      10.Object.is(): দুইটা value exact same কিনা check করে।
 */

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { obj1, obj2 };
console.log(obj3); // etai array er moto problem alada alada obj print kore

// const obj4 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({}, obj1,obj2)
/*
এখানে {} হলো empty object। মানে: প্রথমে একটি নতুন empty object তৈরি করা হচ্ছে তারপর obj1 এর সব property copy হচ্ছে তারপর obj2 এর সব property copy হচ্ছে শেষে result obj4 এ যাচ্ছে
এভাবে original obj1 বা obj2 modify হয় না।  {} না দিলে এখানে obj1 target তাই obj2 এর property obj1 এর ভিতরে ঢুকে যাবে। */
const obj4 = { ...obj1, ...obj2 }; //spreed Operator: Modern alternative (ES6) ekhon evabe use kora hoi eta beshi use kora hoi
console.log(obj4);

//prac1
const list1 = {
  name: "Nuri",
  age: 25,
};

const list2 = {
  city: "Dhaka",
  country: "Bangladesh",
};
const list3 = Object.assign({}, list1, list2);
console.log(list3);

const Cars = {
  name: "BMW",
  model: "X5",
  year: 2023,
};
console.log(Cars);
console.log(Object.keys(Cars)); 
console.log(Object.values(Cars)); 
console.log(Object.entries(Cars)); 
console.log(Cars.hasOwnProperty("name"));

/*output:
keys: ["name", "model", "year"]
values:["BMW", "X5", 2023]
entries: [["name","BMW"],["model","X5"],["year",2023]]
hasOwnProperty :true */

Object.entries(Cars).forEach(([key, value]) => {
  console.log(key, value);
});
/*output:
name BMW
model X5
year 2023 */

//Object.freeze()
const car = {name:"BMW"}
Object.freeze(car)
car.name = "Toyota"
console.log(car.name)
//Output: BMW


//Object.seal()
const person = {name:"Nuri"}
Object.seal(person)
person.name = "Ishmoth"
person.age = 26
console.log(person)
//Output:{name:"Ishmoth"}


// Object.fromEntries()
const arr = [
  ["name","Nuri"],
  ["age",25]
]
const arr1 = Object.fromEntries(arr)
console.log(arr1)
// Output:{name:"Nuri", age:25}



//Object.is()
console.log(Object.is(5,5))
console.log(Object.is(NaN,NaN))
//Output: true true

//Object.create()
const person = {
  greet(){
    console.log("Hello")
  }
}
const user = Object.create(person)
user.greet()
//Output: Hello

// Object Destructuring:
const { model: md } = Cars;
console.log(md);

// Nested Object Destructuring
const user = {
  name: "Nuri",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};
const { address: { city } } = user;
console.log(city);
//Output: Dhaka


//database theke values ase tokon kivabe handle hoi:
//array Object:
const Joy = [
  {
    id: 1,
    email: "joy@gmail.com",
  },
  {
    bike: "v4",
  },
  {
    lp: "mac",
  },
];
console.log(Joy[0].email);
console.log(Joy[1].bike);
console.log(Joy[2].lp);
//Array + Object Destructuring
const [user, bikeInfo, laptopInfo] = Joy;
console.log(user.email);
console.log(bikeInfo.bike);
console.log(laptopInfo.lp);


