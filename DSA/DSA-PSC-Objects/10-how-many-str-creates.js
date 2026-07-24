// how many times you can create "ping"
// input : ppppiiiinngggg

let obj = {};
let str = "ppppiiiinngggg";

for(let i=0; i<=str.length-1; i++){
    if(obj[str[i]] == undefined){
        obj[str[i]] = 1;
    }else{
        obj[str[i]]++;
    }
}
console.log(obj); // { p: 4, i: 4, n: 2, g: 4 }

let min = Infinity;

for(let key in obj){
    if(obj[key] < min){
        min = obj[key];
    }
}
console.log(min); // so only 2 times we can create ping from the str.
