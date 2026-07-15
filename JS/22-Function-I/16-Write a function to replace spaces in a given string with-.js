// Write a function to replace spaces in a given string with "-".

function replaceSpaces(str,symbol){

    let bag = "";

    for(let i=0; i<=str.length-1; i++){
        if(str[i] === " "){
            bag = bag + symbol;
        }else{
            bag = bag + str[i];
        }
    }

    return bag;
}

// console.log(replaceSpaces("hello people's of the tomorrowland","-"));

let string = replaceSpaces("hello people's of the tomorrowland","-");
console.log(string); // hello-people's-of-the-tomorrowland


// first solve without function;
let str = "Hello Full Stack Developers";
let symbol = "$"
let newStr = "";
for(let i=0; i<=str.length-1; i++){
    if(str[i] == " "){
        newStr = newStr + symbol;
    }
    else{
        newStr = newStr + str[i];
    }
}
console.log(newStr);
// Hello$Full$Stack$Developers


// now, solve with using function;

function replaceSpace(str,symbol){
    let newStr = "";

    for(let i=0; i<=str.length-1; i++){
        if(str[i] == " "){
            newStr = newStr + symbol;
        }else{
            newStr = newStr + str[i];
        }
    }

    return newStr;
}

let answer = replaceSpace("Narayan Narayan Narayan","@");
console.log(answer); // Narayan@Narayan@Narayan 
