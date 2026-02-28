// ai 3 vabe array declayer kora jae 

/*1.let arr1 =[0,1,2,3,4]//num array
2.let arr2 =["nuri", "ishmoth", "joy", "adhikary"];
3.let arr3 = new arr(6,7,8,9);
console.log(arr1[2]);// evabe print kora jae array*/

//array methods:
/* 
push: eta array te new elements add Kore.
pop: eta r mane hocche array er last element ke delete kore dae .
unshift: eta holo array er 1st e e element add kore dae kintu problem hoilo 1st e add korle sob array 
        er index change hoie jabe ete jodi huje data thake tokon stystem e prblm hobe .
shift: eta r khaini holo array er 1st index element ke delete kore dibe .
*/
/* 
array ke ques korer jae console kore sei properties gulo holo:
includes: je element die check korbo sei elements array er moddhe ase kina seta check kortese and kore amake jancche
            jodi na thake tahole -1 print kore er mane o jane na oi element exist kore na .
indexOf: etar mane holo ami je elemt search kortesi oi element koto num index e ase seta janabe amake .
 */


let arr1 =[0,1,2,3,4]
arr1.push(5);
arr1.pop();
arr1.unshift(2);
// console.log(arr1);



console.log(arr1.includes(9));
console.log(arr1.indexOf(2));
/* join() : join function er kaj holo aita array ke string e convert kore dae. 
ekhane jokon amra console log arr3 dicchi tokon amra string e convert e kora ta dekhte pacchi kintu jodi 
type of dei tokon je string e print hocche seta print kore dekhabe*/
var arr2 =["a", 1, "joy", "adhikary"]
const arr3 = arr2.join();
// console.log(arr3);
console.log(typeof arr3);

/* slice: array ke manuplate kore na 
splice:  array manuplate kore element ber kore dae array theke
*/ 
let joy =[0,1,2,3,4]
console.log("A",joy);
const slice1 = joy.slice(1,3);
console.log(slice1);

console.log("B",joy);
const splice1 = joy.splice(1,3,4);
console.log("C",joy);
console.log(splice1);


//push jokon kore tokon same array te push kore new element .But jokon concat kore tokon new array
//  creat kore dae same array te dae na 


// prac1:
var arr2 =["a", 1, "joy", "adhikary"]
arr2.push("nuri");
console.log(arr2);

// prac2:

// marge array:
var n1 =["a", "b", "joy", "adhikary"];
var n2 =[123, 120, "nuri"];
var j2 =["xyz", "nuri"];
n1.push(n2);
console.log(n1);
console.log(n1[4][1]);


/*array er main problem holo jekono data ke array hisabe input nie nae suppose sting , object
 emnki array keo o element hisabe nie nae. jemon upr e n1 ekta array but jokon ami n2 ke n1 e push kortesi tokon 
 a,b,joy,adhikary sobgulo elements thakbe last e [123,120,nuri] ai array keo o ekta element hisabe nie nise er mane n1 
 e ekn 5ta data ase . ekn jodi amr n2 er array elemnts acess korer dorker hoi tokon vitore r array index bole dear lagbe
 jeta 70 num line e console log die korsi */


//  concate array:
/* ekn ai eksathe marge korer karone array ke elements hisabe nie nicche ejonno concate use kora hoi concaate
use korle seta array ke element hisabe na nie akdom alada alada elemnent hisabe nae. */
const n3 = n1.concat(n2);
console.log(n3);

// spreed array : 
/* spreed array as dainmaclly always use kora hoi karon eta joto array keo ami marge kori na kno sob gulo elements
ke alada alada kore ekta elements e vag kore dae array ke elements hisabe define kore na  */
const n4 = [...n1, ...j2];
console.log(n4);


/* flat: suppose array r vitore array then sei array r vitore array emn complicated array ke jodi amra ekta 
array te define korte chai tahole flat use korle eksathe 1 ta array te marge kore dae */
const j3 =[1,2,3,4,[5,2,9],6,[7,1,9,10,[8,3]]];
const n5 = j3.flat();
console.log(n5)


console.log(Array.isArray("nuri"))
console.log(Array.isArray(9))
console.log(Array.from("nuri"))
// console.log(Array.from(9,4,8))
console.log(Array.from({name:"joy"}))
/* ekhane empty array dibe karon object ke difine korte partese na ejonno empty array dicche ejono always keys dite 
hobe or array define kore dite hobe */

let score= 100;
let score1= 200;
let score2= 300;

console.log(Array.of(score, score1, score2))




