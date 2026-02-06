const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");
const ExpressError=require("./ExpressError");


main().then((res)=>{
    console.log("connection Successfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));








// let chat1=new Chat({
//     from:"Ujjwal",
//     to:"Uttam",
//     msg:"Send me Hii",
//     Created_at:new Date(),  
// });

// chat1.save().then((res)=>{
//     console.log(res);
// });

app.get("/",(req,res)=>{
    res.send("Working");
});








//-------------------Creating Our Model-----------------------------------------------------
//isme hum schema banye hai model file me and ohaa se export kaar ke yaha require kaar ke use kiye hai

//---------------------------------Initilizing database----------------------------------------

//---------------------------index Route----------------------------------------


app.get("/chats",asyncWrap(async (req,res,next)=>{
    
        let chats=await Chat.find();
        // console.log(chats);
        res.render("index.ejs",{chats});
    
}));



//New Route

app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"page not found");
    res.render("new.ejs");
});


app.post("/chats",asyncWrap(async(req,res,next)=>{

    
        let {from,to,msg}=req.body;
        let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        Created_at:new Date(),
        });

        await newChat.save();

        res.redirect("/chats");
    
        next(err);
    
    

}));

//asyncWrap function
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    };
}


//NEW -show Route // yaa baad me error padhne ke baad bnaa hai
app.get("/chats/:id",asyncWrap(async(req,res,next)=>{

        let {id}=req.params;
        let chat=await Chat.findById(id);
        if(!chat){
            next(new ExpressError(500,"Chat not found"));
        }
        res.render("edit.ejs",{chat});
    
}));

//Edit Route
app.get("/chats/:id/edit",asyncWrap(async (req,res)=>{
    
        let{id}=req.params;
        let chat=await Chat.findById(id);
        res.render("edit.ejs",{chat});
   
}));

//update

app.put("/chats/:id",asyncWrap(async (req,res)=>{

   
        let{id}=req.params;
        let {msg:newMsg}=req.body;
        let updatedChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true, new:true});

        // console.log(updatedChat);

        res.redirect("/chats");
   
}));

//Delete

app.delete("/chats/:id",asyncWrap(async (req,res)=>{
   
        let {id}=req.params;
        let deletedChat=await Chat.findByIdAndDelete(id);
        res.redirect("/chats");
    
}));

const handleValidatioErr=(err)=>{
    console.log("This was a validation error,please follow rules");
    console.log(err.message);
    return err;
}

app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name=== "ValidationError"){
       err= handleValidatioErr(err);
    }
    next(err);
});

//Error Handling Middleware
app.use((err,req,res,next)=>{
    let {status=500,message="some Error Ocuured"}=err;
    res.status(status).send(message);
})

app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});




