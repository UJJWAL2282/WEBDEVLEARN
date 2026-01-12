const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");


//middleware -> response send

//app.use(middleware)--> koi vhi request ke saath work kaar saktaa hai

app.use((req,res,next)=>{
    
    console.log("Hi,I am middleware");
    next();
//  console.log("This is after next"); //yaa vhi execute hogaa
});

app.use((req,res,next)=>{
    
    console.log("Hi,I am 2 middleware");
    next();
});

//logger-morgan

// app.use((req,res,next)=>{
//     req.time=new Date(Date.now());
//     console.log(req.method, req.hostname, req.time);
//     next();
// });

app.use("/random",(req,res,next)=>{
    console.log("I am only for random");
    next();
});

const checkToken=(req,res,next)=>{
    let {token}=req.query;

    if(token=="giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};



app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})


app.get("/random",(req,res)=>{
    res.send("This is a random page");
});


app.get("/",(req,res)=>{
    res.send("Hi I am root")
});


app.get("/err",(req,res)=>{
    abc=abcd;
});


app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is Forbbided");
});


//------------Backend 7 (Errors)---------------------------------------------------------------------------------

app.use((err,req,res,next)=>{
    let {status=500, message="Some Error Ocuured"}=err;
    res.status(status).send(message);
});





































//404 error

// app.use((req,res)=>{
//     res.status(404).send("Page Not found");
// });

app.listen(8080,()=>{
    console.log("Sever listening to port 8080");
});





