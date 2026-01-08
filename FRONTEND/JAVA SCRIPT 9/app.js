//DOM 
//-> combine html +css along with JS
// It allows us to manipulate/change webpage content(HTML elements).


// jaha pe html hai ohaa yaak document object hotaa hai window object jaise JS me hotaa hai
//document object ke andar sara html code ataa hai



//-------------------------------Selecting Elements----------------------------

//--->>>>>>>>>getElemetById<<<<<------------


//return the element as an object or null(if not found)

// document.getElemetById("id name") // yaha se object ayegaa

let mainimgobj=document.getElementById("mainImg");
console.log(mainimgobj);




//--->>>>>>>>>>>>>getElemetsByClass<<<<<<<<-------------------

//return the element as an Html collection or empty collection(if not found), yaha collection ayegaa diyan rakhnaa hai

let oldImgobj=document.getElementsByClassName("oldImg");

for(let i=0; i<oldImgobj.length; i++){
    oldImgobj[i].src="https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill";
    console.log(`value of imag ${i} is changed`);
    console.log(oldImgobj[i]);
}
console.log(oldImgobj);




//-->>>>>>>getElementsByTagName<<<--------------

//return the element as an HTML collection or empty collection (if not found)

let pargrobj=document.getElementsByTagName("p");
console.log(pargrobj);










//---------------------Query Selectors--------------------------

//Allow us to use any css selector

// jaise css me selector lete thee css laagne ke liye baas same hai

document.querySelector('p'); //Selects first p element

document.querySelector('#myId'); //selects first element with id=myId

document.querySelector('.myclass'); // Selects first element with class=myClass

document.querySelectorAll("p"); //select all p elements // yaha nodelist ayegaa

//hum css ke jaisaa nesting kaar sakte hai

document.querySelector('div a'); // first div ke andar anchor tag







//------------------------------Setting Content in Objects-----------------------------------------------------

// Using Properties & Methods

//>>innerText

// shows the visible text contained in a node


//>>textContent

//Show all the full text  (jaise kuch text css ke help se hidden yaa display none hotaa oo vhi yaha dikhe gaa)  -> index.html me jaise likhe hai uss trha se aye gaa  

//>>innerHTML

//shows the full markup // yaha html ke saath dikhegaa saab

let heading=document.querySelector('h1');
heading.innerHTML=`<u>${heading.innerText}</u>`;  //spider man bala part unerline hogaa




//------------------------Manipulating Attributes-----------------------------------------


// attribute kaa matlab hai jaise image tag ke liye   src,id class etc  attribute hai html me padhe thee bhut saare attribute 


//obj.getAttribute(attr) 
let img=document.querySelector('img'); // yaha se object le liye
console.log(img.getAttribute('id')); // yaha se ptaa chegaa ki jis attribute ke liye hum puche hai uskaa value kyaa hai

//obj.setAttribute(attr,val)

img.setAttribute('id', 'newid'); // yaa karne se id me pahile jo vhi thaa oo change ho kaar newid baan gaya
// aaur isko uske karne se yaak time pe yaak hi value rahegaa multiple rahegaa taab saab haat ke jo set karenge oo ragegaa shif saab haat jayegaa
img.setAttribute('src','https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D');






//--------------------------------Manipulating Style--------------------------------------------------

//-----> With Style Attribute<<----



img.style.width='50%'; // ise image kaa width change ho gaya


// yaha jitnaa hogaa saab inline css me change hogaa 
//iss liye isko itnaa use karnaa sahi nahi hai

let links=document.querySelectorAll('.box a'); // yaha se sata box class kaa anchor tag kaa collection aa gaya

for(let i=0; i<links.length; i++){
    links[i].style.color='yellow'; // isse karan box me jitnaa link thaa saab yellow ho gaya uskaa color
}



//-----> Using classList<<------

//classList.add()   --> to add new classes
//classList.remove()  ---> to remove classes
//classList.contains()  ---> to check if class exists
//classList.toggle()     ----> to toggle between add and remove



 // img pahile bnaa huaa hai so yaha se object aa gaya

console.log(img.classList); // yaa btaa degaa kitnaa class hai isme

img.classList.add("qwer"); // isse qwer class add ho gaya

heading.classList.add("green"); // and css file me jaa kaar class sector kaa use kaar ke style de denge taab given css style ke according change gogaa

//to remove class

// heading.classList.remove("green"); // isko karne se green color haat jayegaa and jo vhi aaue css set rahegaa haat jayegaa


//to check class exist kartaa hai usme yaa nahi

heading.classList.contains("green"); //true yaa false ayee gaa exist then true not exist then false




//togglr kaa matlab yes hai taab no hogaa and no hai taab yes hogaa 
//toggle yaa karegaa agar class exist kartaa hogaa taab remove kaar degaa and nahi kartaa hai taab add kaar degaa

// heading.classList.toggle("green");// green pahile se exist kartaa thaa aab oo haat jaygaa

let box=document.querySelector(".box");

box.classList.add('greenbg');







//--------------------------------Navigation--------------------------------------------------------------------------------------


// hum navigation me navigate kaar sakte hai kisi vhi element ke kiye uskaa parent sibling print karaa sakte hai 

//parentElement

//children

//previousElementSibling /nextElementSibling


let h4=document.querySelector('h4');
console.log(h4.parentElement);

console.log(h4.children);

console.log(box.childElementCount); //number children


let ul=document.querySelector('ul');

console.log(ul.children);

console.log(ul.children[1].previousElementSibling); // previousElementSibling kaa matlab hai jis element ko select kiye uskaa previous me ayaa huaa tag siblibg



img.previousElementSibling.style.color="red"; // hum indirectly h1 tag ke color ko change kiye with help ko previous sibling img tag kaa previous sibling h1 hai yaha







//-------------------------------Adding Elements----------------------------------------

// hum java script ke help se element document me add kaarenge

let newP=document.createElement('p');   // --->syntax isse yaak paragraph element add ho gaya html document me lekin yaa page me kahi insert nahi huaa hai

newP.innerText="Hi I am a new p "; // isse inner text create ho gaya

// to display on page we need to insert using append function

//->> appendChild(element)
//->> append(element)   ---> kisi element ko yaa string ko append kaar sakte hai
//->> prepend(element)
//->> insertAdjacent(where, element) --> isse hum deside kaar sakte hai humko kaha add karnaa chate hai exact position


let body=document.querySelector("body");

body.appendChild(newP); //jis element kaa child bnaa chate hai ohaa insert hogaa

box.appendChild(newP); // isse kyaa uaa ki box kaa child baan gaya matlab box me add ho gaya and newP single element hai so oo body se haat jayegaa box me aa jayegaa

//append kaa matlab hotaa hai last me add honaa

let btn=document.createElement("button");  // isse button element create huaa 
btn.innerText="click me"; // isse fir uskaa inner text add kiye

box.appendChild(btn); // isko box me last me insert kaar diye


newP.append("this is new text"); // isse text add ho jaye gaa newP element me
newP.append(btn); // isse kyaa hogaa newP element ke saath btn add ho jayegaa


box.prepend(newP); // isse saab suruat me add ho ajye gaa


//--->insertAdjacent(where,element)

let btn2=document.createElement("button");
btn2.innerText="new Button";

let p=document.querySelector('p');

p.insertAdjacentElement('beforebegin',btn2); //where ke liye mdn check kaaro









//---------------------------------Removeing Element----------------------------------------------

//-->>removeChild(element) 

//--->>remove(element)


body.removeChild(btn2); // yaha btn2 body kaa child thaa iss liye body element ke btn2 ko remove kiye

p.insertAdjacentElement("beforebegin",btn2);

btn2.remove(); // ise direct remove ho gaya

p.remove();








//--------------------practice Qs-----------------------------------------------------------------------------

// yaak alag file bnaa hai practice Qs kaar ke
















