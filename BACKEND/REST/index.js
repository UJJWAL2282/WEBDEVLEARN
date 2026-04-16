const express=require("express");
const app=express();
const path=require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride=require("method-override");


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public"))); 

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))


const port=8080;
app.listen(port,()=>{
    console.log("listen to port: 8080");
});

app.get("/",(req,res)=>{
    res.send("Serving working well!")
});






//------------------------GET/posts-----------------------------------------------------------------------------------

//-->Index Route

//GET /posts  --->to get data for all posts


let posts = [
    {   
        id:uuidv4(),  // unique id laa kaar degaa
        username:"apnacollage",
        content:"I love coding!",

    },

    {
        id:uuidv4(),
        username:"ujjwal",
        content:"Give your 100%",
    },

    {
        id:uuidv4(),
        username:"RahulKumar",
        content:"I got selected for my 1st internship!",
    },
];



app.get("/posts", (req,res)=>{
    res.render("index.ejs",{posts});
});





//---------------------------------Implement:POST/posts--------------------------------------------------------------------------------

//create Route

//POST /posts  --> to add a new post


//2 routes

//>>> Serve the form   GET    /posts/new 
//>>> Add the new post  POST  /posts


app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
});


app.post("/posts",(req,res)=>{
    let id=uuidv4();
    let {username,content}=req.body;
    posts.push({id,username,content});
    res.redirect("/posts");
});



//-------------------Redirect-------------------------------------------------------------------


//To conect diffrent pages


//res.redirect(URL)  // uppar use huaa hai



//---------------------GET/post/:id---------------------------------

//show Route

//GET   /posts/:id      to get one post(using id)


app.get("/posts/:id",(req,res)=>{

    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    console.log(post);
    
    res.render("show.ejs",{post});
});




//---------------------Creating Ids----------------------------------

//creating id for post

//UUID package

//Universally unique identifier

//npm install uuid





//---------------------PATCH/posts/:id------------------------------------------------------

//update Route
//PATCH     /posts/:id


// hum yaha se shif content ko update karenge

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
});

//html form ke andar get and post request vaaj sakte hai shif isko implememt karne ke liye yaak package use karnge


//yaa package method override karegaa and change kaar degaa










//-------------------------Implement:  /posts/:id-------------------------------------
//Destroy Route

//Delete    /posts/:id   to delete specific post

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!=p.id); // yase post ko le kaar ayegaa jo iss id ke barbar nahi hai
    res.redirect("/posts");
});
























