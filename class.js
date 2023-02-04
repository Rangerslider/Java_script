
/*

Use the keyword class to create a class.

Always add a method named constructor():
mane class er majhe onk gula function thake to class name diye call korle ei constructor e run hoi r ki 
and It is executed automatically when a new object is created

syntax of class 

class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
  }

  ClassName.method er nam diye access korty hoi 

  */


  //joy

  class joy {
    constructor() {
        console.log("an class with no perameter && it will run automatically when run this code ")
    }
}

let ex = new joy();


class joy1 {
    constructor(pera1, pera2) {
        this.perameter1 = pera1;
        this.perameter2 = pera2;
    }
    getPerameter() {
        return this.perameter1 + this.perameter2;
    }
}

let ex1 = new joy1("X", "Y");

console.log(ex1.getPerameter());



class joy2 {

    constructor(Passed_name) {
        this.setName(Passed_name);
    }

    getName() {   // getter 
        return this.Passed_name;  // just return name 
    }

    setName(newName) { // setter   // name ke newName nam e pass korsi 
        newName = newName.trim(); // remove space 
        if (newName == " ") {
            console.log(" name can not empty")
        }
        this.Passed_name = newName;  // set kore dicchi name . space remove korar por 
    }
}

let ex2 = new joy2(" joy ");
console.log(ex2.getName());

ex2.setName(" JOY Adhikary ")  // reset name reusing the class structure
console.log(ex2.getName());  // 




//To create a class inheritance, use the extends keyword.
//call super() to invoke the parent class or base class  constructor with the passed argument.
/*

class child_Class extends parent_class {
    constructor(...args) {
        super(...args); // parent_class er constructor ke invoke kore
    }
   method(...args){ };
}
*/

class joy3 {
    constructor(pera1,pera2){
        this.perameter3=pera1;
        this.perameter4=pera2;
    }
    Show(){
        console.log("this is from parent class and it will show 2 perameter ",this.perameter3,"  && " ,this.perameter4);
    }
}

class Adhikary extends joy3{
    constructor(pera1,pera2,pera3){
        super(pera1,pera2);
        this.perameter5=pera3;
    }
    Show1(){
        console.log("this is from child class and it will show 1 perameter ",this.perameter5);
    }
}

let ex3= new Adhikary("x","Y","Z");
console.log(ex3)
ex3.Show();
ex3.Show1();




//nuri
//Getters and Setters
class Person {
    constructor(name) {
        this.name = name;
    }

    // getter
    get personName() {
        return this.name;
    }

    // setter
    set personName(x) {
        this.name = x;
    }
}

let person1 = new Person('nuri');
console.log(person1.name); // Jack

// changing the value of name property
person1.personName = 'joy';
console.log(person1.name); // Sarah