//-----------------------------------------Async Function-----------------------------------------------------------


// create an Async function   ----> by default yaa promise return karte hai

//async & await keywords


// function ke aage agar hum async likhne se async function bantaa hai
// iska use asynchronous karnaa asaan hai

async function greet(){
    // throw "some random error"; // explicitly error throw karne ke liye.
    return "hello world!"; //return a promise
}

let hello=async() => {}; //return a promise.

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was: ", result); // promise kaa result hello world hogaa
})

.catch((err)=>{
    console.log("promise was rejected with err:",err);
});

let demo=async ()=>{
    return 5;
};

console.log(demo());









//---------------------------------Await Keyword--------------------------------------

// pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo1(){
    await getNum();  // await ko nahi likhne se saab yaak saath exexute ho gaya iss liye await likhne ke baas yaa yaak yaak kaar ke execute hogaa and 
                    // await key word ko shif hum async function me shif use kaar sakte hai
                    // iskaa use karne se yaa hogaa ki jaab taak await bala promise resolved nahi ho jataa taab taak niche bala function call nahi hogaa
    await getNum();
    getNum();
};

console.log(demo1());

// color bala question aaur easy bnaa rahe 

let h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolved,reject)=>{
        let num=Math.floor(Math.random()*5)+1;

        if(num>3){
            reject();
        }
        setTimeout(()=>{
            h1.style.color=color;
            resolved();
        },delay);
    });
}

async function demo2(){
    try{
        await changeColor("red",1000);
        await changeColor("yellow",1000);
        changeColor("green",1000);
    }catch(err){
        console.log("error caught");
        console.log(err)
    }
};

demo2();

//---->> handling rejection

// handle karne ke liye try and catch use karenge uppar kiye hai










//------------------------------------API (Application programming Interface)-----------------------------------------------------------


// API ke through hum loog yaak software ko dusre ke saath intreact karte hai
//API se hum request karte hai and oo jaa kaar data le kaar ataa hai and deliver kartaa hai 
// aaj kaal most of time hum web API ko use karte hai jo http ko use karti hai
// and data JSON form me ataa hai

// yaha endpint kaa concept hai kuch usko dekhnaa hogaa( inshort URl jiskaa use kaar ke different resources ko request kiyaa jaye)




//------->> Acessing Some APIs---------

// kuch APIS free hote kuch paid kise me key miltaa hai API ko acess karne ke liye

// jaise twitter kaa api kaa use kaar ke hum bot bnate hai jise kisi ko reply automatic karnaa binaa twitter use post dalnaa bargraa bagraa


// revisio ke liye video dekho

//-------->> JSON<<_____-------------------------------

//java Script Object Notataion  www.json.org

// phile API bntaa thaa taab XML me data return hotaa thaa


// JSON validator hotaa jise hum check kaar sakte ki JSON valid hai yaa nahi yaa usme koi error hai




//----------------Accessing JSON data--------------------------------------


//Accessing Data from JSON

// jo JSON form me response ataa hai oo puraa kaa puraa single  String hotaa hai

// iss liye data ko access kaarne ke liye 2 important function hote hai

// --> JSON.parse(data)    ----> Method To parse a string data into a JS object

// -->JSON.stringify(json) ---> Mthod To parse a JS object data into JSON   //----> iskaa use taab hum karte jaab khud kaa API bnaa hotaa hai

let jsonRes='{"fact":"Many cats cannot properly digest cow s milk. Milk and milk products give them diarrhea.","length":87}';

let validRes=JSON.parse(jsonRes); // isko use karne se JSON se jS kaa object baan gaya jisme key value pair hogaa
console.log(validRes.fact);

let student={
    name:"ujjwal",
    marks:98
}

console.log(JSON.stringify(student));





//----------------------------------------API testing tools------------------------------------------------------------------------------------

// Hoppscoth <best>

//postman






//---------------------------------------Ajax(Asynchronous javaScript and XML)-------------------------------------------------------------------------------------------------------------


// yaa puraa yaak process hai jiske through hum API call karte and sara kaa sara data ataa hai

// js ke code API ko request vajte hai and then response ataa thaa
// yaa jo process hotaa hai asynchronous hotaa hai





//--------------------------------Https Verbs------------------------------------
// verbs ---> matlab kaam

//->GET
//->POST
//->DELETE






//-------------------------Status Codes---------------------------------------------------------------------------

//Example:

//->200 ----> means OK
//->404 ----> means not found
//->400 ----> Bad request
//->500 ----> Internal server Error 

//aaur vhi bhut status code hotaa hai MDN me dekh sakte hai



//----------------------------Additional Information in URLS-------------------------------------------------------------------------------------

//https://www.google.com/search?q=harry+porter // yaha key q hai and value harry+porter hai 
//query string (addition information)




//---------------------------Http Header--------------------------------------------

// addition information supply karte hai
//header ke saath hum meta data vajte hai i.e data about data





//----------------------------Our First Request----------------------------------------------------------------------------------------------------------------

//->> using Fetch


//syntex
// fetch(url)

let url="https://catfact.ninja/fact";


// fetch(url)  // yaa promise return hotaa hai


// .then((res)=>{
//     console.log(res);
//     return res.json(); // yaa function se data redable baan jataa hai and yaa promise return kartaa hai
// })
// .then((data)=>{
//     console.log("data1=",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2=",data2.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })


//-> fetch using async and await

async function getFacts(){
    try{
        let res=await fetch(url);
        console.log(res);
        let data=await res.json();
        console.log(data.fact);

        let res2=await fetch(url);
        console.log(res2);
        let data2=await res2.json();
        console.log(data2.fact);
        
    }catch(err){
        console.log("error-",err);
    }
    
    
}

getFacts();







