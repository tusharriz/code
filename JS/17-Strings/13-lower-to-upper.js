// Given a string in lower case convert it to upper case

let str = "cat";
//output = CAT

let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nstr = "";

for(let i=0; i<=str.length-1; i++){
    for(let j=0; j<=lower.length-1; j++){
        if(str[i] == lower[j]){
            nstr = nstr + upper[j];
            break;
        }
    }
}

console.log(nstr); //CAT