//object Literals
/*object er vitore keys and values er khaini thake ja array te thake na jemon name :nuri ekhane name 
keys and nuri values but array te array er vitore sob values dear lagto ejonno jokon amara acess korte jaitam
j\tokon console.log die oi array er index hisabe access korer lagto but object er khetre amra name(key) die define
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

console.log(user.email)
console.log(user["email"])

 //symbol declear 
 //ques: symbol nie object e print kora 
 const mySym = Symbol("key1") 
 const user1 = {
  name: "nuri",
  age: 26,
//   mySym:"mykey1",
[mySym]:"mykey1",
  location: "dhaka",
  email: "nuri@gmail.com",
  worklog: ["fri", "sat"],
};
console.log(user1.mySym)// ekhane mykey1 print hocche but symbol hocche na ejonno object e declear korer jonno [] bracket er moddhe declare korle oita symbol hoi
console.log(user1[mySym])


// ekhane freeze kore dear karone jokon amra name values chage kore dicchi seta change hobe na 
// object.freeze(user)
user.name="joy"



//function:
user.num = function(){
    console.log("hi")
}
console.log(user.num());

user.num1 = function(){
    console.log(`hi,${this.name}`)// object ke function er moddhe acess korte chaile evabe lekhte hoi.
}
console.log(user.num1());
