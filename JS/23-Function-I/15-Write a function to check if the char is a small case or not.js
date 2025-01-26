// Write a function to check if the char is a small case or not.

function checkChar(char){
    
    let smallChar = "abcdefghijklmnopqrstuvwxyz";
    let flag = false;

    for(let i=0; i<=smallChar.length-1; i++){
        if(smallChar[i] === char){
            flag = true;
        }
    }

    if(flag == true){
        return "Yes,"+" "+char +" "+"is a small case character."
    }else{
        return "No,"+" "+char +" "+"is not a small case character."
    }

}

console.log(checkChar("a")); // Yes, a is a small case character. 
console.log(checkChar("A")); // No, A is not a small case character.


let character = checkChar("b");
console.log(character); // Yes, a is a small case.

let character2 = checkChar("D");
console.log(character2); // No, D is not a small case.