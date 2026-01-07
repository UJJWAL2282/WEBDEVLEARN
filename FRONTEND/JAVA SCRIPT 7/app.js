//--------------------------------this (keyword)------------------------------


//"this" keyword refers to an object that is executing the current piece of code (method thaa). 
const student={
    name:"ujjwal",
    age:23,
    eng:95,
    math:90,
    phy:92,

    getAvg(){
        console.log(this); // puraa student ki object print hogaa
        console.log((this.eng+this.math+this.phy)/3);
    }
}

student.getAvg(); // agar hum this kaa use nahi karenge taab undefine aye gaa for variable this keyword btaa raha ki student object ke iss variable ko hum use karnaa chaa rahe

function getAvg(){
    console.log(this); // yaha window print hogaa matlab js me browser window object bntaa hai saab uspe run hotaa hai
}












//----------------------------------try- catch ---------------------------

// to handle error and exeption

// same as java 

try{
    console.log(a);
}catch(e){
    console.log(e);
    console.log("variable a doesn't exist");
}










//----------------------------------------Miscellaneous Topics---------------------------------

// ->>> TOPIC 1------> ARROW FUNCTION-----------------------------------    
// lambda function like java

const func=(arg1,arg2)=>{/*function defination*/};

// ussually value ke jaisa use hotaa iss liye variable me assign karte hai 
// iskaa use high order function me argument me pass karne ke liye use karte hai 
// name less function hotaa hai
// => arrow function khate hai iss symbol ko


const sum=(a,b)=>{
    console.log(a+b);
}
 
sum(10,20);

const pow=(a,b)=>{
    console.log(a**b);   // a**b likhne kaa matlab a to power b
}

pow(2,3);

// single argument me pherenthesis likhne kaa jarurat nahi hai n=>{}
// and no argument me vhi pherenthesis chiye ()=>{}



//-(1)---Implicit return-------------

// jaha pe hum shif koi value return kaar rahe hai ohaa hum aaur chotaa bnaa sakte hai syntax ko


//syntax
// const func=(args1, args2) =>(/*value*/);   // yaha value likhne kaa matlab hai ki implicit value return hogaa return statement likhne kaa jarurat nahi hai and () aa jata hai { } iske jagha

const mul=(a,b)=>(a*b);  // OR (a,b)=>a*b

console.log(mul(2,10));









//-----------------------------------------------Set TimeOut-----------------------------------------------------

// hum iska use uss time pe karte hai taa ki koi kaam ke liye ruknaa hai  like sleep in java 

// setTimeout(func,timeout); // func -> call back function.      timeout btaa hai ki oo kaam kitne time baad karnaa hai and its take mile sec

console.log("hi there!");

setTimeout( ()=>{
    console.log("Apna collage");  // yaha pe yaa ho raha hai ki apna collage 4 sec baad print hogaa lekin uske baad kaa execute ho jaye gaa
    // basically iskaa use API ke time hotaa hai all.
},4000);

console.log("welcome to");






//---------------------------------------Set Interval----------------------------------------------------------------------

// similar to set timeout diffrence is utne time ruktaa hai and function ko exectute kare gaa and fir utnaa time rukegaa and exectute karegaa matlab haar same interval pe oo function ko execute karegaa

//syntax       setInterval(function,timeinterval)

console.log("hi there!");

let id=setInterval( ()=>{  // yaha hum seInterval kaa yaak id banye hai

    console.log("Apna collage");  
},4000);

console.log("welcome to");


// let id2=setInterval( ()=>{  // yaha hum seInterval kaa yaak id banye hai

//     console.log("Apna collage2");  
// },6000);

// console.log("welcome to");


// for stop it 
clearInterval(id);  // yaha id vala matlab pahila bala stop ho jaye gaa lekin 2nd bala chaltaa rahe gaa







//---------------------------------this with Arrow functions-------------------------------------

//normal function and arraow function ke saath alag behave kartaa hai
//1> scope -> this depend upon calling object ke uppar 
//        lexical scope  
// yaha revision ke liye video dekho


const student1={
    name: "aman",
    marks:95,
    prop:this, // global scope  iss liye window object

    getName:function(){
        console.log(this);  // student object hai
        return this.name;  // isko call kon karegaa student object  --> this=student
    },

    getMarks:()=>{ 
        console.log(this);  // yaa global ho gaya because yaa parent kaa scope dekhe gaa jo hai window object iss liye window kaa saab print hogaa
        // yaha This= window hogaa 
        return this.marks; 
    }
}

const a=5; //global scope
console.log(student1);
console.log(student1.getName());
console.log(student1.getMarks());


// simple bole jo function ko call lagye gaa this uskaa hogaa   (yaha video dekho revision jaruari hai)






//---------------------------------Practice Qs-------------------------------------------------------------------------------------------------------------------------------------------------------------

let square=(n)=> n*n;
console.log(square(2));

let id3=setInterval(function(){
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id3)
    console.log("clear Interval run");
},10000);





