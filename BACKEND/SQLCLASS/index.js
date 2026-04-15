const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'Ujjwal@1234'
});

//Inserting new Data
// let q="INSERT INTO user(id,username,email,password) VALUES ?";
// let users=[ 
//         ["123b","123_newUser1","1abc@gmail.com","1abc"],
//         ["123c","123_newUser2","2abc@gmail.com","2abc"],
//     ];

// try{
//     connection.query(q,[users],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//     });
// }catch(err){
//     console.log(err);
// }

// connection.end(); // isse connection baand ho jayegaa


let getRandomUser= ()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

// let getRandomUser1= ()=> { // for multiple data
//   return [  // yaha data aa array return hogaa key value pair(object) nahi 
//     faker.string.uuid(),
//     faker.internet.username(), // before version 9.1.0, use userName()
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

// let data=[];

// for(let i=1; i<=100; i++){
//   data.push(getRandomUser1()); // 100 fake user data
// }

// try{
//   connection.query(q,[data],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//   });

// }catch (err){
//   console.log(err);
// }

// connection.end();




// console.log(getRandomUser());


//------------------------MySQL2 Package------------------------------------------------------------------

//To connect Node with MySQL

//connection.end(); //to close connection

app.get("/",(req,res)=>{
  let q=`SELECT count(*) FROM user`;
  try{

    connection.query(q,(err,result)=>{
      if(err) throw err;
      let count=result[0]["count(*)"];
      console.log(result[0]["count(*)"]);
      res.render("home.ejs",{count});
    });


  }catch(err){
      console.log(err);
      res.send("Error in database");
  }
});

//show Route
app.get("/user",(req,res)=>{
  let q=`SELECT * FROM user`;

  try{

    connection.query(q,(err,users)=>{
      if(err) throw err;
      
      // console.log(result);
      res.render("showusers.ejs",{users});
    });


  }catch(err){
      console.log(err);
      res.send("Error in database");
  }

});

//Edit Route

app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;

   try{

    connection.query(q,(err,result)=>{
      if(err) throw err;
      console.log(result[0]);
      let user=result[0];
      res.render("edit.ejs",{user});
    });
  }catch(err){
      console.log(err);
      res.send("Error in database");
  }

  
});


//update (DB) route

app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formPass,username:newUsername}=req.body;
  let q=`SELECT * FROM user WHERE id='${id}'`;

   try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      console.log(result[0]);
      let user=result[0];

      if(formPass!=user.password){
        
        res.send("UNAUTHORISED USER");
      }else{
        let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`
        try{
          connection.query(q2,(err,result)=>{
            if(err) throw err
            res.redirect("/user");
          })
        }catch(err){
          console.log(err);
          res.send("DATA BASE ERROR");
        }
      }
    });
  }catch(err){
      console.log(err);
      res.send("Error in database");
  }
});

app.listen("8080");
console.log("Server is listining to port 8080");






