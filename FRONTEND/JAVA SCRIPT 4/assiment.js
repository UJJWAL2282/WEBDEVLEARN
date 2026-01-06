let nums=[1,2,3,4,2,4];

console.log(nums);
document.writeln(nums);
document.writeln();
let n=2;


for(let i=0; i<nums.length; i++){
    if(nums[i]==n){
        nums.splice(i,1);
    }
}

document.writeln(nums);

let a=2349855;
document.writeln(a);

let count= 0;

while(a>0){
    count++;
    a=Math.floor(a/10);
}

document.writeln(count);



