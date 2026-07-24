// given a str print the vowel that are not present in the str.

let vowel = "aeiou";
let str = "masai";
// let output = "eou";

let obj = {
    a : 1,
    e : 1,
    i : 1,
    o : 1,
    u : 1
}

for(let i=0; i<=vowel.length-1; i++){
    for(let j=0; j<=str.length-1; j++){
        if(vowel[i] == str[j]){
            obj[vowel[i]]++;
        }  
    }
}
// console.log(obj); // { a: 3, e: 1, i: 2, o: 1, u: 1 }

let bag = "";
for(let key in obj){
    if(obj[key] == 1){
        bag = bag + key;
    }
}
console.log(bag); // eou

{
let str = "masai";
let obj = {
    a : 1,
    e : 1,
    i : 1,
    o : 1,
    u : 1
}
for(let k=0; k<=str.length-1; k++){
    if(obj[str[k]] == undefined){
        continue;
    }else{
        obj[str[k]]++;
    }
}
// console.log(obj); // { a: 3, e: 1, i: 2, o: 1, u: 1 }
let bag = "";
for(let key in obj){
    if(obj[key] == 1){
        bag = bag + key;
    }
}
console.log(bag); // eou
}

{
let str = "education";
let obj = {
    a : 1,
    e : 1,
    i : 1,
    o : 1,
    u : 1
} 

for(let n=0; n<=str.length-1; n++){
    delete obj[str[n]];
}
console.log(obj);

// if()

let bag = "";
for(let key in obj){
    bag = bag + key;
}

if(bag == ""){
    console.log(-1); // -1
}else{
    console.log(bag); // 
}
}

