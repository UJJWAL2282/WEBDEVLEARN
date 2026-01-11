// yaa file server ke jaisaa act karne baali hai
const express = require('express'); // yaa function ayaa hai

const app=express(); // yaa jo app hai server side me web app create karne me help karegaa

console.dir(app);

// app ke andar listen function hotaa hai jo incoming request ko listen kartaa hai
let port=8080;  //ports are the logical endpoint of network connection that is used to exchange information between a web server and a web client.

// isko aise samjo charger bala wire yaha laage gaa matlab connect karne kaa rastaa
// 3000 custom server baane ke liye use karte hai 


//------>>>>>listen

app.listen(port,()=>{
    console.log("app is listing on port:",port);
});


//--------------------handling request (humko response vajnaa hai taab kaise vaaj sakte hai)-------------------------------------------------------------------------------------------

//---->>>>>app.use


// app.use((req,res)=>{ // yaa saab tara ke request ko listen karegaa and response karegaa
//     // console.log(req);
//     console.log("new incoming request");

//     // res.send("This is a basic responce");  // isko likhne se hum response vaaj sakte hai kuch vhi jaise string,object,html code etc.

//     // res.send({  // yaha object vaje hai   --> lekin isko json me convert kaar degaa
//     //     name:"apple",
//     //     color:"red",
//     // });


//     let code="<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>";
//     res.send(code);
// });


//---------------------Sending a response---------------------------------------------------------------------------------------------------------------------------------------------------------


//http request text based request hoti hai lekin express usko object me convert kaar detaa hai jisko parssing khate hai

// upaar me hi likhe hai  -->>syntax: res.send("send what you want")





//-------------------------Routing------------------------------------------------------------

//it is process of selecting a path for traffic in a network or between or across multiple networks.

// (  /  )  ke baad bali chiz

// agar route available nahi hotaa taab ignore kartaa hai same page show hotaa hai and jaab available hotaa taab response karegaa
// yaak baar me hum yaak path pe yaak hi responce vaaj sakte hai iss liye app.use se response uppar me jaa raha usko comment out karnaa paad raha
//syntax: 

app.get("/",(req,res)=>{
    res.send("Home page Connected");
});
app.get("/apple",(req,res)=>{
    res.send("You contacted apple path");
});

app.get("/mango",(req,res)=>{
    res.send("You contacted mango path");
});

// app.get("*",(req,res)=>{  // yaha star likhne kaa matlab hai ki agar uppar se koi vhi match nahi kiyaa taab error naa aye yaa message aaye yaa fir hum jo vajnaa chate hai response oo jaye
//     res.send("This path does not exist");
// });
  // !!!!!!!yaa last bala kaam nahi kaar raha dekhnaa hogaa!!!!!



  //--->app.post()

app.post("/",(req,res)=>{  // yaa bala hoppscotch pe post me change karne ke baad dikhe gaa
    res.send("you send request to root path");
});




//---------------------------------Installing Nodemon-------------------------------------------------------------

// hum dekh rahe thee uppar code me change karne pe baar baar server ko restart karna apaad raha thaa. uskaa solution isse mile gaa

// To automactcally restart server with code chnages

//nodemon pacakge hotaa hai expess ke jaisaa npn ke andar

// aab change karnge pe code server khud se restart ho jayegaa



//-------------------------------------------Path Parameter------------------------------------------------------


// hum /apple jaise likhe hai oo yaak likh diye lekin multiple bnaa nahi sakte taab hum variable use karte hai ohaa

app.get("/:username/:id",(req,res)=>{ // yaha /: kaa use kiyaa gaya : ke baad variable name likhte  hai
    // console.log(req.params);  // yaa vaiable me jo value ayaa hogaa usko dikhyegaa console pe

    let {username,id}=req.params;
    let htmlCode=`<h1>Welcome to the page of @${username}!</h1>`;
    res.send(htmlCode);
});





//-------------------------------------Query Strings--------------------------------------------------------------------------------------------------------------


//q=some thing jo thaa usko query string bolte hai


app.get("/search",(req,res)=>{
    // console.log(req.query); //iskaa use karenge taab console me jo query vajenge dikhegaa

    let {q}=req.query;
    let codehtml=`<h1>these are the search result for query: ${q}</h1>`;

    if(!q){
        res.send("<h1>Nothing searched</h1>");
    }
    res.send(codehtml);
});

//http://localhost:8080/search?q=apple    // multiple query use & and then write second query











