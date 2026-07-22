// Detect Palindrome

function detectPalindrome(num){
    //write code here
    
    let originalNum = num
    let reverse = 0;
    while(num > 0){
        reverse = (reverse*10) + (num%10);
        num = (Math.floor(num/10));
    }
    // console.log(reverse);
    
    if(originalNum == reverse){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
detectPalindrome(1221); // Yes


let n = 1221;

let str = ""+n
console.log(str); // "1221"
console.log(typeof str); // string

let nstr = "";

for(let i=0; i<=str.length-1; i++){
    nstr += str[i];
}
console.log(nstr);

if(str == nstr){
    console.log("Yes");
}else{
    console.log("No");
}