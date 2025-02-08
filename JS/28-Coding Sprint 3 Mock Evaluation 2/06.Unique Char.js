// Unique Char

// Given an string , find the new string that will be the concatenation of unique character (whose occurrence is 1 ) in the original string.
// Sample Input : amsterdam
// Sample Output : sterd

// Explanation
// Since , In amsterdam the occurence of each character are as follows
// a -> 2
// m -> 2
// s -> 1
// t -> 1
// e -> 1
// r -> 1
// d -> 1

// those elements whose occurence is 1 are s,t,e,r,d

// Thus, the output will be "sterd"

let str = "amsterdam";
let obj = {};
let nstr = "";

for(let i=0; i<=str.length-1; i++){
    if(obj[str[i]] === undefined){
        obj[str[i]] = 1;
    }else{
        obj[str[i]]++;
    }
}
console.log(obj); // { a:2, m:2, s:1, t:1, e:1, r:1, d:1 }

for(let key in obj){
    if(obj[key] == 1){
        nstr += key;
    }
}
console.log(nstr); // sterd
