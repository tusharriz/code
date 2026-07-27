// **Explanation**
// Given a string , how many "pen" we can create.

// Input 1: "penmenpkenplen"
// Output 1: 3

// Input 2: "epxynzn"
// Output 2: 1 

// Explanation: In example 1 we can make "pen" 3 times. 
// In Example 2 we can make "pen" 1 time.


{
    let str = "penmenpkenplen";
    let out = "pen";

    let obj = {};

    for(let char of str){
        obj[char] = (obj[char] || 0) + 1;
    }
    // console.log(obj); // { p: 3, e: 4, n: 4, m: 1, k: 1, l: 1 } 

    let min = Infinity;

    for( let letter of out){
        for(let key in obj){
            if(key === letter){
                if(obj[key] < min){
                    min = obj[key];
                }
            }
        }
    }
    // console.log(min); // 3
}

// OR

let str = "penmenpkenplen";

let obj = {
    p : 0,
    e : 0,
    n : 0
}

for(let i=0; i<=str.length-1; i++){
    if((obj[str[i]]) !== undefined){
        obj[str[i]]++;
    }
}
// console.log(obj); // { p: 3, e: 4, n: 4 }

let min = Infinity;
for(let key in obj){
    if(obj[key] < min){
        min = obj[key];
    }
}
// console.log(min); // 3

// OR

{
let str = "penmenpkenplen"; // output : 3
let str = "epxynzn"; // output : 1
let obj = {};

for(let ele of str){
    if(obj[ele] == undefined){
        obj[ele] = 1;
    }else{
        obj[ele]++;
    }
}

// console.log(obj); // { p: 3, e: 4, n: 4, m: 1, k: 1, l: 1 }
let min = Infinity;
let s = "pen"
for(let i=0; i<=s.length-1; i++){
    // console.log(obj[s[i]]); // 3 4 4
    if(obj[s[i]] < min){
        min = obj[s[i]];
    }
}
console.log(min); // 3
}