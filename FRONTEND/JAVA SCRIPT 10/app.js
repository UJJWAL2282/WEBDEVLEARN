
//-----------------------------------DOM Event-----------------------------------------------------------

//Events are signals that something has occurred. (user input /actions)

// --->inline Event

//  html file ke andar hum button tag bnaa kaar usme on click attrribute kaa use kaar rahe hai ohaa java script lagaa rahe


//-----> on click <<<<<<_______________________________________________________________

let btn=document.querySelector("button");
btn.onclick=function(){
    alert("button was cliked!"); // jaise hi button click huaa yaa function tigger ho gaya
};

function sayHello(){
    alert("Hello!");
};


btn.onclick=sayHello;


//for multiple button 


let btns=document.querySelectorAll("button"); // yaha se collection ayegaa

for(btn of btns){
    // btn.onclick=sayHello;   // reminder yaha pe galti se yaa nahi likhana seyHello() barnaa yaa yahi pe execute hogaa name liknaa hai function kaa shif
}



//---> onmouseenter <<<<<<<<_________________________________________________________________________________________

function youEnter(){
    console.log("You Enter a Button");
};

for(btn of btns){
    btn.onmouseenter=youEnter;
};












//-----------------------------------Event Listener-----------------------------------------------------------------------

// element.addEventListener(event,callback)  // event ke liye MDN dekho 

//button ke click karne pe multiple event ho iske liye use hotaa hai

for(btn of btns){

    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName); // event listner se yaha pe click karne pe 2 kaam karaa rahe
}


function sayName(){
    alert("Apna Collage");
};






//------------------Activity--------------------------
//activity kaa yaak new file bnaa huaa hai







//----------------------Event Listener for Elemnts------------------------------------------------------------------------

let p=document.querySelector("p");

p.addEventListener("click",function(){
    console.log("paragraph clicked");
});


let box=document.querySelector(".box");

box.addEventListener("mouseenter",function(){
    // box.classList.add("yellow");
    console.log("Mouse inside box");
});








//---------------------------------this In Event Listeners----------------------------------------------------------------------------------------------

//when 'this' is used in a callback of event handler of something. it refers to that something.

// jaab hum eventListner use kaar rahe hote hai taab callback function ke jagha pe hum this kaa use kaar sakte hai this yaa batyegaa ki oo specific object jiske liye call huaa hai

//eg se clear hogaa


let btn1=document.querySelector(".btn1");

btn1.addEventListener("click",function(){
    console.log(this); // isse khud object print hogaa jaise yaha object button hai khud taab ohi print hogaa.
    console.log(this.innerText);
    this.style.backgroundColor="blue";
});


let p1=document.querySelectorAll("p");
p1[1].addEventListener("click",function(){
    console.log(this); // isse khud object print hogaa jaise yaha object button hai khud taab ohi print hogaa.
    console.log(this.innerText);
    this.style.backgroundColor="blue";
});

let h1=document.querySelector("h1");

h1.addEventListener("click",function (){
    console.log(this.innerText);
    this.style.backgroundColor="blue";
});


// bar bar likhne ke jagha hum change color function bnaa lenge



function changeColor(){
    this.style.backgroundColor="blue";
}

// aab kyaa karenge call back function me changecolor paas kaar denge this ke help se oo khud samaj jayegaa ki kon saa element hai
//eg:  p.addEventLisetner("click",changeColor);







//--------------------------------------------------Keyboard Events---------------------------------------------------------------------------------------

btn1.addEventListener("click",function(event){ // call back function me by default yaak event argument hotaa hai
    console.log(event);
    console.log("button Clicked");
});


let input=document.querySelector("input");

input.addEventListener("keydown",function(event){
    
    console.log("code=", event.code); //ArrowUp , ArrowDown, ArrowLeft, ArrowRight

    if(event.code=="ArrowUp"){
        console.log("Charater moves forword");
    }else if(event.code=="ArrowDown"){
        console.log("Charater moves backward");
    }else if(event.code=="ArrowLeft"){
        console.log("Charater moves Left");
    }else if(event.code=="ArrowRight"){
        console.log("Charater moves Right");
    }
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    console.log("key was pressed");
});// event ke liye MDN

input.addEventListener("keyup",function(){
    console.log("key was released");
});

// event argument ke andar important property hotaa hai yaak code and yaak key
// code me kuch sring ayegaa jaise space ke liye 'space' ayegaa and key me screen ke uppar kyaa hai oo






//-------------------------------Form Event-------------------------------------------------------------------------------------

let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault(); // isse default prevent ho gaya matlab action perform nahi hogaa
    alert("Form submit");
});

// agar hum nahi chate hai ki submit button dawane pe action ho jaye taab hum yaak method kaa use karte hai matlab default kaam rokne kaa kaam








//-----------------------------Extracting Form Data------------------------------------------------------------------------------------------------


form.addEventListener("submit",function(event){
    event.preventDefault();
    let user=document.querySelector("#username"); // we can write this.elements[0]; niche explain hai
    let pass=document.querySelector("#password"); // we can also write this.element[1];
    console.dir(user);
    console.log(user.value);// input ke andar jo dala gaya oo innertext me isme nahi ataa value ke andar ataa hai
    console.log(pass.value);  

    alert(` hi ${user.value}, your password is set to ${pass.value}`);
});



//select karne kaa another way hai form object ke through
//form.elements[i] yaa use kaar sakte hai










//-----------------------------------------------------More Events---------------------------------------------------------------------------------------


// change Event

//the change event occurs when the value of an elements has been changed(only works on <input>,<textarea> and <select> elements).

// input event

//the input event fires when the value of an <input>, <select> or <textarea> element has been changed.

let user=document.querySelector("#username");

user.addEventListener("change", function(event){ // agar kuch vhi change karenge taab trigger hogaa
    event.preventDefault();
    console.log("change event");
    console.log("final value=",this.value);
});



//input change chotaa change vhi show kartaa hai

user.addEventListener("input", function(event){ // agar kuch vhi change karenge taab trigger hogaa
    event.preventDefault();
    console.log("input event");
    console.log("final value=",this.value);
});

// non character key input event ko trigger nahi jaregi


//----question or event practice----------------

let inpu=document.querySelector("#text");

inpu.addEventListener("input", function(){
    let p2=document.querySelector("#editor");
    p2.innerText=inpu.value;
    console.log(inpu.value);
});













 






