//---------------Function in js-----------------------------

//syntax 
// function defination(telling js)

//function funName(){
        //do something
//}


//Function calling(using the function)
        //funName();

function hello(){
    console.log("function test");

}


hello(); // calling function function ko use karne ke liye function ko call karna hogaa


function printName(){
    console.log("Apna Collage");
}

printName();


//------------------------Practice Qs1-----------------

function printPoem(){
    console.log("Twinkle Twinkle,Little Star");
}

printPoem();

//--------------------Practice Qs2----------------------------
function rollDice(){
    let num=Math.floor(Math.random()*6)+1;
    console.log(num);
}

rollDice();





//---------------------Function with Arguments-------------------
    // value we pass to the function

function sum( num1,num2){
    console.log(num1+num2);
}

sum(2,4);
sum(2); // yaha error nahi aye gaa baas undefine ayegaa so yaha integer hai iss liye NaN




//---------------------parctice Q3-----------------

function calAvg(num1,num2,num3){
    console.log((num1+num2+num3)/3);
}


calAvg(1,2,3);       // f in consol represent ki function hai 


//--------------------Practice Q4-----------------------

function printTable(num){

    for(let i=1; i<=10; i++){
        console.log(num*i);
    }
}

printTable(2);



//-----------------return--------------------

function sum1(num1,num2){
    return num1+num2;
}

console.log(sum1(2,3));

let s=sum1(sum1(1,2),3); //yaha sum ke andar hum hai isko aise samjo Math.floor ke andar random use karte thee naa baas oysee hi phile sum 1 ans 2 kaa hogaa fie 3


//_>>> NOTE::->>>>>  return statement ke baad hum kuch vhi likhenge taab oo execute nahi hogaa unrechable hogaa code





//--------------------practice Q5------------------------------------------

function sumOfN(num){
    let sum=0;
    for(let i=1; i<=num; i++){
        sum+=i;
    }

    return sum;
}

console.log(sumOfN(10));



//--------------------------practice Q6--------------------------------------

let str=["hi","hello","bye","!"];
function concatenate(arr){
    let result="";
    for(let i=0; i<str.length; i++){
        result+=arr[i];
    }

    return result;
}

console.log(concatenate(str));



//------------------------Scope---------------------------------------------

//Scope determines the accessibility of variable,object and function from diffrent parts of the code


//types of scope
// ->Function
// ->Block
// ->Lexical
//->Global

//->1> Function Scope -----> variable define inside a function are not accessible(visible) from outside the function

let sumresult=5+10;// global scope

function calSum(a,b){
    let sumresult=a+b; //function scope
}

console.log(sumresult);   // yaa function ke bhara acess nahi hogaa

//->2> Block Scope --------> Variables declared inside a {} block cannot be accessed from outside the block
//_>>>>NOTE: 2015 se pahile var ke word thaa lekin aab humare paas let and const keyword hai so block shif let and const pe apply hogaa

{
    const a=25;
    let b=10;
    var c=30;
}

// console.log(a); // error aa jaye gaa because undefine due to block scope
// console.log(b);
console.log(c);  // yaha nahi ayegaa because var ke liye koi block nahi hotaa iss liye var kaa use karnaa sahi nahi hai



//->3> Lexical Scope (Nested function) ----> a variable defined outside a function can be accessible inside another function defined after the variable declaration.

// the opposite is not true

function outerFun(){
    let x=6;
    let y=10;

    function innerFun(){

        let z=11;
        console.log(x); // yaha pe possible hai scope hai

    }

    innerFun();

    // console.log(z); yaa possible nahi opposite case
}

// innerfun(); //yaa vhi possible nahi hai andar ke function ko call karnaa
outerFun();



//------------------------------------------practice Q7--------------------------------------

let greet="hello";

function changeGreet(){
    let greet="namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}

console.log(greet);
changeGreet();











//----------------------------------------Function Expressions-------------------------------------------------------

// yaha hum log nameless function baante hai and variable me function store karte hai

let name="shradha";

let sum3=function(a,b){
    return a+b;
}

//calling nameless function using variable name 
//-->>>NOTE:  jo kaam varible ke saath karte hai jaise variable ko function me paas karte hai same type kaa kaam humko agar function ke saath karnaa hai taab usko function Expression me define karte hai
console.log(sum3(2,10));


//eg. change varible value 

sum3=function(a,b){
    return a*b;
}









//-----------------------------------------High Order Functions--------------------------------------------------------------------------------------------------------------------------------------


// A function that does one or both
// ->> take ones or multiple function as arguments
// ->> return function

function multipleGreet(func,n){ //higher Order function
    for(let i=1; i<=n; i++){
        func()
    }
}

let greet1=function(){
    console.log("hello");
}

multipleGreet(greet1,2);
// multipleGreet(function(){console.log("hello")},2);




//-> return function


// let odd=function(n){
//             console.log(!(n%2==0));
//         };

// let even=function(n){
//             console.log(n%2==0);
//         };


    
function oddEvenFactory(request){
    if(request=="odd"){
        let odd= function(n){
            console.log(!(n%2==0));
        }

        return odd;
    }else if(request=="even"){
       return function(n){
            console.log(n%2==0);
        }

        return even;
    }else{
        console.log("wrong request");
    }
}

let request="even";

let func=oddEvenFactory(request);

func(3);







//--------------------------------Methods--------------------------------------------------

//Action that can be performed on an object( in simple jo object under function hotaa hai oo method kahte hai)

const Calculator={  // yaha function key value pair me liktaa hai 

    num:55,

    add: function(a,b){
        return a+b;
    },

    sub: function(a,b){
        return a-b;
    },

    mul: function(a,b){
         return a*b;
    },

    //shorthand

    div(a,b){  // hum iss type se likh sakte hai java ke jaisaa function key word kaa use nahi karnaa hai
        return a/b;
    }

    

}

console.log(Calculator.num);

console.log(Calculator.add(20,50));

// java script me array and string object hai and most of chiz object hai 



