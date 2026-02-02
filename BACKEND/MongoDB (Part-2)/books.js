const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test'); // yaa btaa raha ki mongoDB ke data baseke saath connect kaar rahe aaur jiskaa link hai oo data base ke saath connect kaar rahe


main().then(()=>{ //promise kaa concept hai yaha
    console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    author:{
        type:String,
    },

    price:{
        type:Number,
    }
})

const Book=mongoose.model("Book",bookSchema);


// let book1= new Book({
//     title:"Mathmatics XII",
//     author:"RD sharma",
//     price:1200,
// });

// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// let book2= new Book({
//     title:"Mathmatics VIII",
//     price:1200,
// });

// book2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });



//-----------enum ke bare padhe hai oo website se padho--yaa video se------




//--------------------Validation in Updation------------------------------------------------------


Book.findByIdAndUpdate("6881c9d96dc428379e23d73c",{price:1300}, {runValidators:true}).then((res)=>{  // runValidators iss liye use huaa ki update time vhi oo condition laag sake jo schema define ke time lgaa thaa
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


//-------------------Validation in error --------------------------------

//yaha hum sikhe hai error ke case me custom message kaise de

