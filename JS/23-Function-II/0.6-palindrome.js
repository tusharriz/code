// check string is palindrome or not;

function reverseStr(str){
    let nstr = "";

    for(let i=str.length-1; i>=0; i--){
        nstr = nstr + str[i];
    }

    return nstr;
}

let string = "javascript";

if(string == reverseStr(string)){
    console.log(string, "is a Palindrome.");
}else{
    console.log(string, "is not a Palindrome."); // javascript is not a Palindrome.
}