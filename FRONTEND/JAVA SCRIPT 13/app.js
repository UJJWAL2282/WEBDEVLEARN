//----------------------------Axios--------------------------------------------

//Library to make HTTP requests


// another way to send request

let btn=document.querySelector("#btn1");
let p=document.q
btn.addEventListener("click",async ()=>{
    let fact=await getFacts();
    let p=document.querySelector("#fact");
    p.innerText=fact;
    
});

let url="https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res=await axios.get(url); //yaa promise return karte gaa and yaa exact response ataa hai jaise hume chiye
        return res.data.fact; // yaha parse karne kaa jaruart nahi hai 

    }catch(err){
        console.log("Error-",err);
        return "No fact found"
    }
}


let url2="https://dog.ceo/api/breeds/image/random";
let btn2=document.querySelector("#btn2");

btn2.addEventListener('click', async ()=>{
    let imgLink=await getImg();
    
    let p=document.querySelector("#img");
    p.innerHTML=`<img src=${imgLink} width="300px" height="300px">`;
});

async function getImg(){
    try{
        let res=await axios.get(url2);
        return res.data.message;
    }catch(err){
        console.log("Error-",err);
        return "No Data found";
    }
}




//-----------------------------Sending Headers with API request--------------------------------

const url3="https://icanhazdadjoke.com/";

async function getJokes(){

    try{
        const config={headers:{Accept:"application/json"}}; // yaha object hai and header first key ha iuske andar accept bnaa hai
        let res=await axios.get(url3,config);// yaha second argument me header paas ho gaya
        console.log("Jokes:",res.data.joke);
    }catch(err){
        console.log(err);
    }
}

getJokes();



//-------------------------------------Activity using Query String-----------------------------------------------------

// const url4="http://universities.hipolabs.com/search?name="; //kaam nahi kaar raha API

// let country="nepal";

// async function getColleges(){
//     try{
//         let res=await axios.get(url+country);
//         console.log(res);
//     }catch(err){
//         console.log(err);
//     }
// }

// getColleges();





