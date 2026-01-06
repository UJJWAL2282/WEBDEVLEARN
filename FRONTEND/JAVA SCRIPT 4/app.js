// const favMovie="Avtar";
// let guess=prompt("Guess my favorite Movie");
// while((favMovie!=guess)&& (guess!="quit")){
//     guess=prompt("wrong guess.please try again");
// }


// let fruits=["mango","apple","banana","litchi","orange"];
// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "Apnacollage"){
//     console.log(char);
// }


let todo=[]; //empty array
let req=prompt("Enter your request");

while(true){
    if(req=="quit"){
        console.log("you quit app");
        break;
    } 
    
    if(req=="list"){
        console.log("--------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("--------------");

    }else if(req=="add"){
        let task=prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let del=prompt("Enter the index of task that you want to delete");
        todo.splice(del,1); 
    }else{
        console.log("Wrong request");
    }
    req=prompt("Enter your request")
}

