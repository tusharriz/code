// use the reverse function to check if a string is palindrome or not?

function reverseStr(str){

    let nstr = "";
    for(let i=str.length-1; i>=0; i--){
        nstr += str[i];
    }
    return nstr;
}

console.log("racecar"); // racecar

let string = "racecar";
if(string === reverseStr(string)){
    console.log(string,"is a Palindrome"); // racecar is a Palindrome
}else{
    console.log(string,"is not a Palindrome"); // racecar is a Palindrome
}