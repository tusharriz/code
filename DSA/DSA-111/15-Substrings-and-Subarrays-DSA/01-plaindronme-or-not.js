// write a function to check str is palindrome or not

function isPalindrome(str){
    
    let nstr = "";
    for(let i=str.length-1; i>=0; i--){
        nstr += str[i];
    }
    return str === nstr; // this statement return only booleean value, true or false so, if you want to return "yes" or "not" so for this you can write if else condition;

}

let str = isPalindrome("racecar")
console.log(str);