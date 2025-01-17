// Given a character in lower case print the upper case character

let lowerChar = "d";
let upperChar;

//output => D

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(let i=0; i<=lowerCase.length-1; i++){
    if(lowerChar==lowerCase[i]){ //jab lowerCase of i yaaniki d match hoga, lowerChar d se toh condition true hogi   
        upperChar = upperCase[i]; // toh iss time mera upperCase of i yaniki 4 hoga D joh ki store hojayega upperChar mei
        break;
    }
}

console.log(upperChar); // D