/* function mainly kaj kore  ami eki code ber ber na lekhe sei code  ke ek jaegae store kore oitar nam dhore sob jaegae add kora 
suppose,, amr kase 10 ta pen ,10 ta books ase  eta ami ber ber na lekhe ekta function  create  kore sei function ke ber ber call korbo . */

//function r vitore je msg  input dibo sei input ke parameter bole..  r jodi function call r vitore jodi amra msg input kori taile seta ke argument bole 
/* function add(nuri) {  ** nuri =>parameter
 console.log(nuri);
}
 add('hello')  ** hello =>argument 
 ekhane amra multiple argument & parameter diye function call korte pari */


 /* function er vitore return value thake jeta ruturn kore and sei return er por je kono kisu function
  r viotre lekhle ba input dile emnki console dileo kaj korbe na */

           /* ---------------------------BlockScope: --------------------------- */
 /* blockScop: etar mane hosse parameter er ja input thake seta ke function er viotrei kaje lagano jabe er 
 baire kaj kore na jodi amra prameter ke finction er baire print korate chai tahole seta kaj korbe na ejonno aita ke block scope bole */


// ex1 : function a  variable b theke excess nite partese karob variable b Global scope.
function a() {
    console.log(b); // 10
  }

  var b = 10;
  a(); 

  //ex2 :eta ekta nested function  ai karone 10 print hosse karon varible b hosse global scope ja nested function e o acess kore
function a() {
    c();
    function c() {
      console.log(b); // 10

    }
  }
  var b = 10;
  a();


  //ex3: blockscope e details lekha 
function a() {
    var b = 10;
  }
  a();
  console.log(b); // Error, Not Defined


















                       /* ---------------------------Arrow function: --------------------------- */
//nomally function creat 
  function countVowels (str){
    let count = 0;
    for ( const char of str){
      if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        count++;
      }
    }
    return count;
  }

 // now this function create in arrow function
 const countVowelsArrow = (str) => {
    let count = 0;
    for ( const char of str){
      if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        count++;
      }
    }
    return count;
  }



                       /* ---------------------------CallBack function: --------------------------- */
//Heigh Order function or Heigh Order methods ke forEach function or callback function ke bola hoi. --interviwe ques
//jekono function ke onno ekta function er moddhe argument hisabe pass kora jae sei function ke callback function bole 
//syntax: arr.forEach(CallBackFunction)

let arr =["nuri", "joy", "ishmoth"];

arr.forEach((val, idx) => {
    console.log(val.toUpperCase(), idx, arr);// ekhane arr by default thake 
});

// ex2
let nums =[7, 10, 39];
let square = (num) => {
    console.log( num * num);
};
nums.forEach(square); 