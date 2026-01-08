//-----------------------------JS call Stack--------------------------------------------

function hello(){
    console.log("inside hello fnx");
    console.log("hello");
}

function demo(){
    console.log("calling hello fnx");
    hello();
}
console.log("calling demo fnx")
demo();


// yaha stack banegaa pahile stack me demo function jayegaa and 
// then hello function fir hello bhar nikle gaa and demo function  





//------------------------------Visualizing the call stack---------------------------------------

function one(){
    return 1;
}


function two(){
    return one()+one();
}

function three (){
    let result=two()+one();
    console.log(result);
}

three();




//-------------------------BreakPoints-------------------------------------------------------------

// javascript kaa callstack ko browser ke through vhi track kaar sakte hai

//debug karnaa matlab error ko find karnaa

// yaa saab browser se hogaa video dekho





//------------------------------JS is Single Threaded--------------------------------

// matlab yaak time pe code ki yaak chiz he execute ho payegaa

let a=25;
console.log(a);
let b=10;
console.log(b);
console.log(a+b);

// synchronus--> line by line execute karnaa 

// jaise API ke case me kyaa hotaa hai ki js request vajta  hai api data return kartaa and oo time letaa hai taab kyaa JS ko ruknaa chiye


// Yaha video dekho concept hai puraa(aise likha hai niche me kuch kuch)

setTimeout(()=>{
    console.log("Apna Collage");
},2000);  // java script wait nahi karegaa ki 2 sec puraa ho oo aage kaa code execute karaa degaa 
//but oo fir single threaded kaise huaa--> reason waiting kaa time browser kartaa hai Java Script nahi.
//Browser c++ me likhi hoti hai and yaa multithreading support kartaa hai

console.log("hello");








//-------------------------------------------Callback Hell--------------------------------------------------------------

let h1=document.querySelector("h1");

setTimeout(()=>{
    h1.style.color="red";
},1000);

setTimeout(()=>{
    h1.style.color="orange";
},2000);

setTimeout(()=>{
    h1.style.color="green";
},3000);   

// yase likhne ke jagha  hum isko alag tara se likh sakte hai

function changeColor(color,delay,nextColorChange){    //yaa nextColorChnage yaa call back function hai 
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange){  // callback function me kuch paas huaa then true ayegaa else false
            nextColorChange();
        }
        
    },delay);
    
}


changeColor("red",4000,()=>{  // 4000 yaha iss liye ku ki 3000 uppaar uske baad 1000 matlab yaak ke baad yaak hogaa relative me aab 
    changeColor("yellow",1000,()=>{
        changeColor("green",1000);
    });
});   // isko use karne se yaa huaa ki yaak ke baad yaak hogaa multiple kaam 


// yase code likhna bhut complex and avi likhne ke baad baad me samjna vhi bhut complex hai iss liye hum promises kaa use karte hai





//-----------------------------------------------------------Promises---------------------------------------------------------------------------

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// database kaa chota saa concept use karenge

function savetoDb(data,success,failure){

    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();  
    } else{
        failure();
    }
    
};

savetoDb("Apna collage",()=>{

        console.log("your data1 was saved");
        //data dave-2
        savetoDb("Hello World",()=>{
        
            console.log("Sucess2: data2 saved");
            //data save-3
            savetoDb("Ujjwal", ()=>{
                console.log("Data3 saved");

            },()=>console.log("Weak connection 3"));
        },()=>console.log("failure2: weak connection"));
    }, ()=>console.log("weak connection. data not saved")
);


// yaak kaam ho jaye taab dusra kaam kara do

function savetoDb(data,success,failure){

    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("sucess: data was saved");  
        } else{
            reject("failure: weak connection");
        } 
    });
    
};

// console.log(savetoDb("data is saved")); // yaha se promise object return ho kaar ayegaa




//-->> Refactoring with promises

// resolve (success) and reject (failure)

// callback function lene ke jagha hum return kaar dete hai 

// Agar kaam ho jaye gaa taab status fulfilled ayegaa
// pending matlab koi issue hai puraa nahi huaa hai
//rejected matlab nahi huaa



//-------- then() & catch()

let request=savetoDb("apnacollage");  //request=promise object
request
    .then(()=>{
        console.log("promise resolved");  // syntax aisa hai yaad rakho
    })

    .catch(()=>{
        console.log("promise rejected");
    });


//promise apne aap me object hai so uske paas kud kaa method hotaa usme se 2 main hai

//-->>> then() & catch()

// agar promise fullfill ho chukaa taab humlog then method kaa use karte hai and reject hone ke baad kuch kaam ho taab catch() kaa use karte hai.



//-->>> promise chaining

//multiple then kaa use karnaa 
// iska use kaar ke hum yaak ho jaye taab yaa kaam kaar do implement karenge


request
    .then(()=>{
        console.log("promise resolved");  // syntax aisa hai yaad rakho
        return savetoDb("hello world") // agar data 2 save nahi hotaa taab iskaa catch bala part kaa jaruart nahi hai same catch se kaam chal jayegaa
    })
    .then(()=>{
        console.log("promise 2 resolved"); // ohaa se return ho kaar yaha ayegaa second kaam yaha video dekho and samjo need more paractice
    })

    .catch(()=>{
        console.log("promise rejected");
    });





//----------------------------result_error in promise--------------------------------------------------------------------

// then function ke andar hum yaak result name kaa yaa fir koi vhi name kaa argument rakh sakte hai taab humko ptaa chalegaa ki kyaa reason ke karan promise puraa huaa and reject huaa





//-----------------------Refactoring old code-----------------------------------------


let h2=document.querySelector("h2");


function changeColor2(color,delay){

    return new Promise((relove,reject)=>{
        setTimeout(()=>{
            h2.style.color=color;
            relove("color changed!");
        },delay);
    });
}

let request1=changeColor2('red',1000);

request1
    .then(()=>{
        console.log("redcolor completed");
        return changeColor2("yellow",1000);
    })
    .then(()=>{
        console.log("yellow color completed");
        return changeColor2("green",1000);
    })
    .then(()=>{
        console.log("green color completed");
    })

    .catch(()=>{
        console.log("rejected");
    })






