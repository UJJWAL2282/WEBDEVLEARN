const express=require("express");
const path=require("path");

// yaha EJS yaak package hai lekin usko require karne kaa jaruart nahi because express ke saath oo vhi require ho jataa hai

const app=express();

const port=8080;


app.listen(port,()=>{
console.log(`listining on port ${port}`);
});

//Ejs ko use karne ke liye hum kuch code likhte hai

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "/views")); // likhne se agar server kahi aaur se vhi chalu hogaa taab oo view bale folder ko yahi dundegaa
//path yaak package hotaa usko require karnaa hogaa

// view words refers to ejs

app.get("/", (req,res)=>{
    res.render("home.ejs"); // jaab hum isko call karenge taab yaa view bale folder ko khojegaa
});

app.get("/hello",(req,res)=>{
    res.send("Home route")
})


//ejs ke help se hum response ko send nahi karte hai render karte hai
// render kaa matlab hai badi se file vajnaa          and response vajne kaa matlab string message yaa saab vajnaa chotaa chotaa


// views folder bnaa rahe template ke liye

// template ejs ki create karenge home.ejs and usme html code hogaa







//----------------------------------Interpolation Syntax----------------------------------------------

//Interpolation refers to embedding expressions into marked up text.

// iskaa use kaar hum html ko dynamic baane baale .

// iskaa matlab yaa ki jiss thara ke request ayegaa page oysaa load hogaa

// baki kaa part home.ejs me likha hai 

//<h3><%= "Apna Collage".toUpperCase()%></h3>
//<h3><%= ["hello","hii","namaste"] [2] %></h3>





//----------------------------------Passing data to EJS-------------------------------------------------------------

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1; // assume yaa database se ayaa hogaa
    res.render("rolldice.ejs",{num:diceVal}); // object ke form me paas karnaa padtaa hai rolldice.js me key kaa name likhne se acess ho ataa hai hum key and value variable kaa name jaab same lete hai taab hum direct aise vhi likh sakte hai {dicVal}
});






//----------------------------Activity Instagram EJS-----------------------------------

// create a basic template for instagram page based on following route:

// ligl:username means username agar ujjwal hai taab ligl/ujjwal ko request jayegaa


app.get("/ig/:username",(req,res)=>{
    const followers =["adam","bob","steve","abc"]; // loop me padhnaa hai niche
    let {username}=req.params; // params kaa matlab hai link me jo hum usename daale hai naa oo aa jaye gaa
    res.render("instagram.ejs",{username,followers});
});




//-----------------------Conditional Statements in EJS-------------------------------------------

//Adding conditions inside EJS   tag:<%

//<% if(diceVal==6) { %>
//<h2>Nice! Roll dice again.</h2>
//<%} %>



//---------------------------Loop--------------------------------

// iskaa example instagram ke followers ke saath kiyaa gaya hai upapar me



app.get("/ig2/:username",(req,res)=>{
    const instaData=require("./data.json"); // data.json kaa sara data instaData me aa gaya
    let {username}=req.params;
    const data=instaData[username];

    if(data){
        console.log(data);
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
    
})




//--------------------Includes------------------------------------------------------------------


// syntax: <%= include("includes/head.ejs"); %>

//subtemplates ------> templetes ke andar kuch include karnaa hai taab isko use karte hai









//------------------------Serving static Files--------------------------------------------------------------------------

//syntax: app.use(express.static(folder_name));


//css and javascrit file ko include karnaa ho 

app.use(express.static(path.join(__dirname,"/public/css"))); // iske use hum kisi vhi file vo send kaar sakte hai server pe and public naam kaa folder me css likhnaa hai yaa syntax hai default
app.use(express.static(path.join(__dirname,"/public/js")));

//java script bala kaam nahi kaar raha
























