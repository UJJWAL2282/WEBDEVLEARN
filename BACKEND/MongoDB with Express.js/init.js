const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main().then((res)=>{
    console.log("connection Successfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};



let allchats=[

    {
       
        from:"Ujjwal",
        to:"Uttam",
        msg:"Send me Hii",
        Created_at:new Date(),
    },

    {
        from:"Shreya",
        to:"Sudeshna",
        msg:"hii sudeshna",
        Created_at:new Date(),
    },

    {
        from:"shreya",
        to:"ujjwal",
        msg:"hii ujjwal",
        Created_at:new Date(),
    }
]


Chat.insertMany(allchats);



