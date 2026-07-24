// check if a str is palindrome or not. you can also re-arrange the characters.

let str = "racecar";

let obj = {};

for(let i=0; i<=str.length-1; i++){
    if(obj[str[i]] == undefined){
        obj[str[i]] = 1;
    }else{
        obj[str[i]]++;
    }
}

console.log(obj); // { c: 2, a: 2, r: 2, e: 1 }

let oddCount = 0;
for(let key in obj){
    if(obj[key]%2!==0){
        oddCount++;
    }
}
console.log(oddCount);

if(oddCount > 1){
    console.log("Not a Palindrome");
}else{
    console.log("Palindrome");
}