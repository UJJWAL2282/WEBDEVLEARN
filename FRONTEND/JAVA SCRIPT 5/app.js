const Student={
    name:"ujjwal",
    age:20,
    marks:99.9,
    city:"Delhi"
};

const item={
    price:20,
    color:["red", "blue"]   // to acess this write item.color or item["color"]
    
};

const Post={
    username: "@ujjwal",
    content: "video",
    likes: 10,
    reposts: 3,
    tags: ["@uttam,@shreya"]
};

// get value   
//obj["key"]
//eg. Post["like"]   -> 10
//Post.content  ->  10 

const Obj={
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    true:"e",
    undefine:"f"
// key: value jo key hai jaise true undefine yaa saab java script me 
// string me automatically convert ho jataa hai iss liye hum 
// true keyword hone ke baad vhi hum usko use kaar paate hai as 
// name of key

//hum Obj[1] likhe iska matlab hai 1 conside hai as string
//But hum obj.1 nahi likh sakte dot operator 1 ko directly string convert nahi kartaa
//lekin obj.null kaam karegaa

}


//-----------------Add/Update Value------------------------------

//student object kaa change kaar rahe uppar bnaa hai

Student.city="mumbai"; //student kaa city change ho gaya to mumbai

//hum koi property add kaar sakte hai  directly aise likh kaar 
Student.gender="male"; // yaa geneder exit nahi kartaa thaa new create ho gaya

//marks change
Student.marks='A'; // yaha update ho kaar 'A' ho gaya hai jaab ki ohaa pahile number thaa yaa ho sakta hai hum kuch vhi update kaar sakte hai



// Delete

//delete objname.keyname   // yaha delete yaak operator hai 
//eg. delete student.gender  // yaha gender bala property delete ho gaya






//---------------------Object of Object  (Nested Objects)----------------------------

const classInfo={
    ujjwal:{
        grade:'O',
        marks:96
    },

    Shreya:{
        grade:"A+",
        marks:92
        
    },
}

// to acess inner object
//classInfo.ujjwal

//classInfo.ujjwal.grade // yaha inner object kaa property acess huaa






//----------------------Array of Objects-----------------------------

const classInfo2=[ // array ke liye use square bracket 
    {      // at index 0 yaak object bnaa classInfo2 object array me
        name:"ujjwal",
        grade:'O',
        marks:96
    },
    {   // at index 1 yaak object bnaa class Info2 object array me
        name:"shreya",
        grade:"A+",
        marks:92

    },
    
];   

//for acess
//classInfo2[0] // index 0 object kaa puraa detail

//classInfo2[0].name -> ujjwal aye gaa

// to add gender in index 1 object
//classInfo[1].gender="female"  // yaha add ho gaya gender property with female value



//--------------------Math Object------------------------------


//->property


//Math.pi
//Math.E    iska value hotaa hai 2.7182

//--> Methods


//Math.abs(n)
//Math.random() // to generate random number 0 to 1(  1 excusive hogaa matlab 1 nahi ayegaa)
//Math.floor(n) // round of to smaller ke liye   eg.Math.floor(4.2)->5
//Math.ceil(n)   // round of to larger


//->similar to java<-




//------------------------------Random Integers---------------------------


//for 1 to 10  random function 0 se 1 taak genrate kartaa lekin usko hum 1 se 10 ke liye kaar sakte hai by doing as follow

let num=Math.random();  // step-1  to generate random number
num=num*10;  // step-2  10 se multiply kiye iskaa matlab 1 se 10 agar hum 100 se karte taab 1 to 100 hotaa similar 1000 se kiye taab 1 to 1000 random number generate hogaa
num=Math.floor(num);  //step-3  to remove decimal part

//combine all three steps

let num2=Math.floor(Math.random()*10)+1;

// but yaak glich hai  1 to 10 nahi aye gaa 0 to 9 aye gaa 1 kavhi ayegaa nahi taab 1*10=10 ayegaa nahi iss liye hum 



//------------------Practice Question---------------------------
let num3=Math.floor(Math.random()*100)+1;  //generate number from 1 to 100

let num4=Math.floor(Math.random()*5)+1;  // 1 to 5

let num5=Math.floor(Math.random()*5)+20; // yaha 1 to 5 koi vhi random number generate hotaa lekin hum add kaar diye 20 jise aab 20 se 24 taak number ayegaa aise socho 0 min hai so 0+20=20 and 4 max hai 4+20=25




//-----------------Gussing Game---------------------

const max=prompt("Enter a max number");
console.log(max);

const random=Math.floor(Math.random()*max)+1;
console.log(random);

let guess=prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }

    if(guess == random ){
        console.log("You are right! congrats!!");
        break;
    }else if(guess<random){
        guess=prompt("hint:you guess was wrong and too small. please try again");
    }else{
        guess=prompt("hint:you guess was wrong and too large. please try again");
    }

}




