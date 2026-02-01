//OOPS in js

const stu1={
    name:"ujjwal",
    age:25,
    marks:95,

    getMarks: function(){
        return this.marks;
    },

};

const stu2={
    name:"Uttam",
    age:20,
    marks:90
};

const stu3={
    name:"Aman",
    age:20,
    marks:90
};

const stu4={
    name:"Shreya",
    age:20,
    marks:90
};


//Object Prototypes 

//Prototypes are the mechanism by which javaScript objects inherit features from one another.

//It is like a single template object that all object inherit methods and properties from without having their own copy.

// arr._proto_(reference)
//Array.prototype(actual object)
//String.prototype


//Every object in js has a built-in property, which is called its prototype.

let arr=[1,2,3];
let arr2=[8,6,5];

arr.sayHello=()=>{console.log("hello!, i am arr")};

//------------ Factory Functions----

//A function that creates objects


function PersonMaker(name,age){
    const Person ={
        name:name,
        age:age,
        talk(){
            console.log(`Hi my name is ${this.name}`);
        }
 
    }

    return Person;
}


let p1=PersonMaker("ujjwal", 20);
console.log(p1);



//---------------NEW Operator (efficient)--------------------------------

//The new Operator lets devlopers create an instance of user-defined object type or of one of the built-in-object types that has a constructor function.

//constructors-doesn't return anything & start with capital letter
function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.talk=function(){  // yaa method person class me bnaa aisaa samjo
    console.log(`hi my name is ${this.name}`);
}

//to create object

let p2=new Person("ujjwal",20); // new operator help us to create instances
let p3=new Person("Uttam",19);




//------------------------classes--------------------------------------------

//--> classes are a template for creating objects

// The constructor method is a special method of a class for creating and initializing an object instance of that class.

class Person1{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`hi my name is ${this.name}`);
    }
}

let p4=new Person("Ujjwal123",20);
let p5=new Person("Uttam",19);

console.log(p4);

//------------------------Inheitance-------------------------------

//inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

//(java ke jaisaa hai )


class Student extends Person1{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
        
    }

    talk(){
         console.log(`hi my name is ${this.name}`);
    }
}


let s1=new Student("ujjwal",20,95);


class Teacher extends Person1{
    constructor(name,age,subject){
        super(name,age); // parents class constructor being called
        this.subject=subject;
    
    }

    talk(){
         console.log(`hi my name is ${this.name}`);
    }
}

class Mammal{
    constructor(name){
        this.name=name;
        this.type="warm-blooded";
    }

    eat(){
        console.log("Eating")
    }
}

class Cat extends Mammal{
    constructor(name){
        super(name);
    }

    meow(){
        console.log("meowwww..");
    }
}




