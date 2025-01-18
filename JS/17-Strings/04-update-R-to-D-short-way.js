// update Ronald to Donald;

// easy and short method;
let str = "Ronald";
let bag = "";

for(let i=0; i<=str.length-1; i++){
    if(str[i]=="R"){
        bag = bag + "D";
    }else{
        bag = bag + str[i];
    }
}
console.log(bag); // Donald