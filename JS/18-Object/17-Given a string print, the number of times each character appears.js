// Given a string print, the number of times each character appears

let str = "abaecbegaac";

let obj = {};

for(let i=0; i<=str.length-1; i++){
    let key = str[i];
    if(obj[key] == undefined){
        obj[key] = 1;
    }else{
        obj[key]++;
    }   
}

console.log(obj); // { a: 4, b: 2, e: 2, c: 2, g: 1 }