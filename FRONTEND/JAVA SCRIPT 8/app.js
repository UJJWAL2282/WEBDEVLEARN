//----------------------------Array Method----------------------------------------------------------

//-->>>>> For Each

let arr=[1,2,3,4,5];

let print =function(el){
    console.log(el);
};

arr.forEach(print);  // array ke haar element ke liye call hogaa and element print hogaa

arr.forEach((el)=>{
    console.log(el)
});

// same thing we can do for object arr

let arr1=[
    {
        name:"ujjwal",
        marks:90,
    },

    {
        name:"shreya",
        marks:98,
    }
]

arr1.forEach((students)=>{
    console.log(students)
});








//---------------------------------------------Map Function-----------------------------------------------

//syntex

//let newArr=arr.map(some function defination or name);

// similar to forEach 

let num=[1,2,3,4,];

let double=num.map((el)=>{ // yaha pe yaa huaa ki yaa jo vhi value return karegaa oo double yaak new array me bane gaa and store hogaa 
    return el*2;
});

// agar koi return type nahi hotaa taab blank array bantaa same size kaa and usme undefine hogaa uskaa sara value

let gpa=arr1.map((el)=>{
    return el.marks/10; // yaha uppar me jo arr1 object bnaa hai usme jo marks hai usko gpa me convert kaar rahe hai and yaak array bane gaa usme store hogaa
});

console.log(gpa);





//-------------------------------------Filter------------------------------
// yaa function hume true degaa taab new array me add hogaa basically filter ke andar condition kyaa hai uspe filter hotaa hai
//let newArr=arr.filter(some function defination or name);

let nums=[1,2,3,4,13,6,7,2,9,10,11];

let ans=nums.filter((el)=>{
    return el%2==0;   // jo vhi number even hogaa true hogaa uske so even number saab store hogaa ans me
})







//------------------------------------------Every----------------------------------------------------------


//Return true if every element of array given true for some function. Else return false

let value=[1,2,6,4].every((el) => (el%2==0)); // false            // yaa logical and ke jaisaa saab satisfied then true nahi to false
console.log(value);   // yaha sara value satisfied kiyaa taab true anhi to false



//------------------------------------Some Function-------------------------------------------------------------------------

// yaa logical or ke jaisaa hai yaak vhi value true then true 

let value1=[1,2,6,4].some((el) => (el%2==0)); //true
console.log(value1); 




//---------------------------Reduce---------------------------------------------------------

let arr6=[1,4,2,5,6,72,9,2];
// let max=-1;

// for(let i=0; i<arr.length; i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }


// //console.log(max);


//By using same thing by reduce

let ans2=arr6.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});

console.log(ans2);










//------------------------------------Practice Qs------------------------------------------------------------------------------------------------------

// check if all number in our array are of 10 or not.

let num1=[10,20,30,30];

let ans1=num1.every((el)=> (el%10==0));

console.log(ans1);




//part 2

let min=nums.reduce((min,el)=>{ 
    if(min<el){
        return min;
    }else{
        return el;
    }
});
    
console.log(min);











//-------------------------------------Default Parameters--------------------------------------
//Giving a default value to argumnets

//syntex 

// function func(a,b=2){  yaha yaa matlab huaa agar b kaa value nahi ayaa taab b=2 default rahe gaa
//     //do something
// }


function sum(a,b=2){
    return a+b;
}

console.log(sum(2)); // 4
console.log(sum(5,5)); // 10

// hum pahile bale paramete me default value vhi daal saktre hai lekin saath me baad bale me honaa chiye (a=2,b=2 sahi hai) lekin (a=2,b) yaa wrong hai





//-------------------------------Spread----------------------------------------------------------------------------------------------------------------------

//expands an iterable into multiple values


//syntex

// function func(...arr){
//     //do something
// }

// ... yaa dot spread ke liye use hotaa yaha video dekho revise ke liye

let arr2=[1,2,3,4,5,6,4,6,7,5,0,];

Math.min(...arr2); // yaha kyaa hogaa ki array ke haar element pe iterate hogaa and minimum calculate hogaa

// agar hum ko haar element ko individual print karnaa hotaa taab
console.log(...arr2);







//----------------------------------Spread-------------------------------------------------------------

//with array Literals

let arr3=[1,2,3,4,5];
let newArr=[...arr3];  // yaha yaak new array baan gaya sara element copy ho kaar
arr3.push(6);// yaha shif arr3 me effect hogaa new Arr me nahi 

console.log(newArr);

let char=[..."hello"]; // yaha haar charachter store hogaa alag alag
console.log(char);

let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];

let num4=[...odd,...even]; // yaha odd and even array dono copy ho gaya hai pahile odd ayegaa fir even bala
console.log(num4);


//with object Literals

const data={
    email:"ujjwal@gmail.com",
    password:"12345",
};

let dataCopy={...data,id:123};  // yaha yaa ho raha ki data object kaa saab copy ho gaya and yaak extra property add ho gaya jo id hai

console.log(dataCopy);


let arr5=[1,2,3,4,5,];

let obj1={...arr}; // yaha yaa bala { use huaa hai} naa ki yaa [] so yaha object ke form me copy ho raha means key value pair ke form me index key hogaa and index pe jo value hogaa oo value

console.log(obj1);







//---------------------------------------Rest-----------------------------------------------------------

// opposite of spread 
//allows a function to take an indefinite number of arguments and bundle them in an array

function sum(...args){ // yaha jina vhi argument aa raha hogaa oo yaak collection me ikhtaa hogaa

    for(let i=0; i<args.length; i++){
        console.log("you gave us:",args[i]);
    }
    // return args.reduce((add,el) => add+el);
}


// java script me by default

function min1(a,b,c,d){
    console.log(arguments);  // yaha hum arguments naam kaa varible nahi define kiye but fir vhi koi issue nahi hai iskaa matlab hai in java scripts me by default arrguments kaa collection baan jataa hai array nahi
    // iss liye hum arguments.push(1); use nahi kaar sakte push ayyar kaa meyhod hai naa ki collection kaa
}













//--------------Destructuring---------------------------------------

//storeing values of array into multiple variables

// matlab yaa hai ki destructure karnaa and store arnaa varible me

let names=["tony","bruce","peter","steve"];

let[winner, runner,secondrunner]=names; // taab yaha winner me tony and runner me bruce and next bala second runner


// lekin yaha pe der sara name and hum chate hai bacha huaa rest array me store kaar le

let[winner1,runner2,...others]=names; // yaha winner 1 me tony and runner2 me bruce and rest bala bacha huaa kaa others name kaa array baan jayegaa



//For object


const student6={
    name:"ujjwal",
    age:20,
    class:14,
    subjects:["hindi","english"],
    username:"@ujjwal",
    pass:"12345",

}


let {username,pass}=students6;  // yaha hum { yaa bracket use kiye}    and hum kyaa karenge ki key kaa name likhenge variable ke jagha oo search karegaa and store kaar legaa

// for storing in diffrent variable

let {username:user,pass:pass2}=student6; // yaha hum key name and and varible likhe hai yaha user me username store hogaa and pass pass2 me

let {username:user1,pass:pass3,city="delhi"}=student6; // yaha city nahi thaa so hum default value de diye hai 
// agaer city exist kartaa thaa taab ohi print hogaa















