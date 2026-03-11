/*...num1 হলো rest parameter। এর কাজ হলো ফাংশনে যতগুলো argument পাঠানো হবে, সবগুলোকে একসাথে ধরে একটা 
array বানিয়ে রাখে।*/

function calculatePrice(...num1) {
  return num1;
}
console.log(calculatePrice(200, 300, 400));

//ekta object ke function er moddhe pathie kivabe acess nea jae :
const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

// handleObject(user);
handleObject({ username: "hitesh", price: 199 });//2vabei print kora jae 1st ta dynamacilly

