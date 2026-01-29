const express=require("express");

const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(port,()=>{
    console.log("Listing to port 8080");
});

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`Standard GET response. Welcome ${user}`);
});

app.post("/register",(req,res)=>{
    let {user,password}=req.body;

    // console.log(req.body); // yaha undefine ayegaa isko express nahi samaj paa raha isko samjne ke liye parse karnaa hogaa

    res.send(`Standard POST response. Welcome ${user}`);
});

//Handleing Post request 
//--> set up POST request route to get some response
//-->Parse POST request data

// app.use(express.urlencoded({extended:true})); // app.use kaa matlab sare get and post ke liye hai and andar me middle ware hai jo encode karegaa
// app.use(express.json()); // agar hum json format me data vaaj rahe taab yaa likhenge

// yaa 2 line uppar likhe hai


// OOPS in jS


