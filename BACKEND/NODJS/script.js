

//------------------------------NODE REPL-------------------------------------------------
//(read evaluate print loop)

// .help gives us commands


// Dom ko terminal se hum nahi implement kaar sakte hai

// and ohaa window object nahi hotaa hai ohaa global hai

//------------------------------Node Files-------------------------------------------------------------


// node fileName.js



let n=5;
for(let i=0; i<n; i++){
   console.log("hello",i); 
}


//---------------------Process------------------------------------------


//(Simple prompt jisaa hai baas jaise uskaa use karte thee input lene ke liye )

//process :  This object provides information about,and control over,the current Node.js process.


//process.argv: return an array containing the command-line arguments passed when the Node.js process was lauched.

// node ke andar by default yaak object hoti hai prosess jobtataa hai ki kyaa cah raha kuch vhi operation iske use se karte hai.


// argument code jo run kaar raha uske liye input

// yaha se array return ho kaar aata hai


//process.argv-------> agar koi argument nahi hotaa taab humko by default 2 value ataa hai file ki location dikhta hai jaha code run ho raha


console.log(process.argv);

let args=process.argv;
for(let i=0; i<args.length; i++){
console.log("hello & welcome to ",args[i]);
}




//------------------------------------Export in File--------------------------------
//(requie(): a built in function to include external modules that exist in separate files.)


//(modeule.exports :  a special object)


//dusre file ke function and property ko kaise use kaare

const someValue=require("./Math.js");  // ./ kaa matlab hai same directory ke andarke kisi file ko acess kaar rahe . 

// jis case me export kuch return nahi kaar raha hotaa and hum print kaar rahe hote taab empty object print hogaa 
console.log(someValue); // yaha oo obj ayegaa jo Math.js se ayaa hai
console.log(someValue.sum(2,4));
console.log(someValue.mul(2,2));



//-------------------------Export in Directories-------------------------------------------------

//aab hum yaak directory se dusre directory se data transfer karenge

// jis directory kaa sara file hum export karnaa chate hai ohaa yaak file create karte hai index.js se


let fruit=require("./fruits/index.js"); // yaha se directory aa jayegaa
// jaab hum require karte hai taab index.js se start hogaa ohi name use karnaa main function ke jaisaa samjo

console.log(fruit);




//---------------------------------------NPM (Node Package Managaer)------------------------------------------------------------------------------
//(important)


// -->>npm is the standard package manager for Node.js

// imagine as library of package ----> package means kisi aaur kaa likhaa huaa code kaa collection
// command line tool--> install or manupulate through command line 

// npm are pre installed with node


//---> installing Packages

// koi devloper kaa code hum use karnaa chate hai taab uskaa package install karnaa hogaa


//syntax 

// npm install <-package name->


// node_module--> The node_modules folder conatins every installed dependency for your project.

// package-lock.json--> It records the exact version of every installed dependency, including its sub-dependencies and their versions.

// figlet directory ke andar index.js bnaa rahe


//package.js ke help se hum node module ko fir se install kaar sakte

//npm install ke use se



// humko kisi ko jaab project share karnaa hai taab module share nahi karnaa oo khud install kaar legaa npm install se shif package.json denaa hai 


//-----------------------Local vs Global-----------------------------------------------


// module kaa use directory ke bahar use karnaa means globally

// npm install -g <-pacage name->
//npm link <-package name->



// yaha figlet ko use karenge 

const figlets=require("figlet");

var figlet = require("figlet");

figlet("UTTAM", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});





//--------------------------------------require v/s import----------------------------


//import {sum} from "./math.js"


import {sum,PI} from "./Math.js"

// itnaa likhne se kaam nahi chale gaa humko pakage.json file create karnaa hogaa iske liye hum npm init command kaa use karenge
//itnaa karne ke baad jo package.json ayegaa usme yaak property add karnaa hogaa "type":"module" huesaa

console.log(sum(2,2));

// hum require and import yaak saath yaak file me nahi use kaar sakte iss liye piche saab comment out karo isko chalne ke liye


// require old hai import new 

//require me hum kuch data kaa option nahi hotaa lekin import me kuch chiz matlab jitaana function ya property yaa data kaa jaruart hotaa hai shif le sakte haim  jise memory save hotaa hai


//loding is synchronous for 'require' but can be asynchronous for 'import'.








