// swapChracters

// Part 1

// 1. Write a function that takes one parameterÂ **(i.e array of string )**Â and returns array of strings with swapped cases of letters.Â **For Example : swapChracters(arr)**

// 2. The function should perform the given task: Given an array, it will return the array of strings that have swapped cases of letters.

// - **Sample Input 1**
// array - ["MaSai","SchooL"]

// - **Sample Output 1**
// ["mAsAI", "sCHOOl"]

// - **Sample Input 2**
// array - ["Nrupul", "Prateek", "Yogesh", "Aman", "Albert"]

// - **Sample Output 2**
// ["nRUPUL", "pRATEEK", "yOGESH", "aMAN", "aLBERT"]


function customCharSwap(str){
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nstr = "";

    // loop for lower to upper and upper to lower
    for(let i=0; i<=lower.length-1; i++){
        if(str === lower[i]){
            nstr += upper[i];
            break;
        }else if(str === upper[i]){
            nstr += lower[i]
            break;
        }
    }
    return nstr;
}

let str = "hElLo";
let swapStr = "";

for(let i=0; i<=str.length-1; i++){
    swapStr += customCharSwap(str[i]);
}
console.log(swapStr); // HeLlO

function swapArrStr(arr){
    let narr = [];
    for(let i=0; i<=arr.length-1; i++){
        let str = arr[i];
        let swapStr = "";
        for(let j=0; j<=str.length-1; j++){
            swapStr += (customCharSwap(str[j]));
        }
        narr.push(swapStr);
    }
    return narr;
};

console.log(swapArrStr(["Nrupul", "Prateek", "Yogesh", "Aman", "Albert"]));

// [ 'nRUPUL', 'pRATEEK', 'yOGESH', 'aMAN', 'aLBERT' ]

let arr = ["Hello","World"];
let narr = swapArrStr(arr);
console.log(narr); // [ 'hELLO', 'wORLD' ]
