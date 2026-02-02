const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test'); // yaa btaa raha ki mongoDB ke data baseke saath connect kaar rahe aaur jiskaa link hai oo data base ke saath connect kaar rahe


main().then(()=>{ //promise kaa concept hai yaha
    console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



//----------------------------Schema-------------------------------------------------------------

//Schema defines the shape of the documents within that collection.

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});



//---------------------Models----------------------------------------------------------------------------------

//Model in mongoose is a class with which we construct documents.

const User=mongoose.model("User",userSchema); // to create collection
// const Employee=mongoose.model("Employee",userSchema);



//----------------------Insert------------------------------------------------

//Inserting One

// const user1=new User({name:"Adam", email:"adam@yahoo.in", age:48});  //document create kaar rahe
// const user2=new User({name:"Eve",email:"evw@google.com",age:48});

// user1.save(); //to save in DB

// user2.save(); //to save in DB //yaa promise return kaar ke detaa hai




//Inserting Multiple

// User.insertMany([
//     {name:"ujjwal",email:"ujjwal@gmail.com",age:20},
//     {name:"Peter",email:"peter@gmail.com",age:30},
//     {name:"Bruce",email:"bruce@gmail.com",age:47},
// ]).then((res)=>{
//     console.log(res);
// });


//Note:::::::::

// Mongoose uses Operation Buffering

// Mongoose lets you start using your models immediately,
// without waiting for mongoose to establish a connection to MongoDB.




//-------------------------------Find in Mongoose----------------------------------------------------------------------

//Model.find()     //returns a Query Object(thennable)

//*Mongoose Queries are not promises.But they have a .then()



// User.find({}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// User.findOne({age:{$gt:47}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });


// User.findById('687fc480848d2371713d7fa4').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });





//---------------------------------Update----------------------------------------------------

//Model.updateOne()

// User.updateOne({name:"Adam"},{age:49}).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// })

// User.updateMany({age:{$gt:40}},{age:55}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });



// User.findOneAndUpdate({name:"ujjwal"},{age:25},{new:true}).then((res)=>{  // phile find kartaa hai fir print kartaa hai then update kartaa hai
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// User.findByIdAndUpdate({_id:'687fc6c8bd249486b2ee5db2'},{name:"Ujjwal_Kumar"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });






//---------------------DELETE----------------------------------------------------------------------------------------

// Model.deleteOne()  //returns count

User.deleteOne({name:"Peter"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


// kyaa delete huaa hai usko dekhne ke liye
// Model.findByIdAndDelete({_id:""});



//Schema Validations

//Basically,Rules for Schema

 // books.js bale me hai yaha ke baad






