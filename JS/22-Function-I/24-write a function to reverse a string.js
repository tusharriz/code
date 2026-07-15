// write a function to reverse a string

function reverseStr(str){

    let nstr = "";
    for(let i=str.length-1; i>=0; i--){
        nstr += str[i];
    }
    return nstr;
}

console.log(reverseStr("hello")); // olleh
console.log(reverseStr("tushar")); // rahsut



let string = reverseStr("javascript");
console.log(string); // tpircsavaj