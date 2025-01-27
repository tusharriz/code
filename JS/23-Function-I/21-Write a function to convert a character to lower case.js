// Write a function to convert a character to lower case

function lowerChar(char){
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nstr = "";
    let flag = false;

    for (let i = 0; i <= upper.length - 1; i++) {
        if (char === upper[i]) {
            nstr = nstr + lower[i];
            flag = true;
            break;
        }
    }

    if(flag == true){
        return nstr;
    }else{
        return char;
    }
}
console.log(lowerChar("b")); // b
console.log(lowerChar("B")); // b


// Use this function to convert a given word to lower case

let word = "HeLLo";
let lowerWord = "";

for(let i=0; i<=word.length-1; i++){
    lowerWord += (lowerChar(word[i]));
}
console.log(lowerWord); // hello


// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

let arr = ["MA", "SA", "I", "SCH", "OOL"];
let lowerArr = []; //empty arr for adding lower array of str

for(let i=0; i<=arr.length-1; i++){
    let word = arr[i];
    let nstr = "";
    for(let j=0; j<=word.length-1; j++){
        nstr += lowerChar(word[j]);
    }
    lowerArr.push(nstr);
}
console.log(lowerArr); // [ 'ma', 'sa', 'i', 'sch', 'ool' ] 