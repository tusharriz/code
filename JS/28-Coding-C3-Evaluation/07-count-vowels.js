// ### Part 2

// 1. Write a function that takes one parameter **(i.e. the swapped case array returned by swapCharacters() function)** and returns the total number of vowels **(including both lower case and upper case)** present in all the string in the returned array.
// - **Sample Input 1**
// ["mAsAI", "sCHOOl"]

// - **Sample Output 1**
// 5

// ### Note :
// - Do not use inbuilt functions.

// function for string
function customCountVowel(str){
    let lower = "aeiou";
    let upper = "AEIOU";
    let count = 0;

    // loop for lower to upper and upper to lower
    for(let i=0; i<=lower.length-1; i++){
        if(str === lower[i]){
            count++;
            break;
        }else if(str === upper[i]){
            count++;
            break;
        }
    }
    return count;
};
// console.log(customCountVowel("o")); // 1


let str = "mAsaI";
let total = 0;
for(let i=0; i<=str.length-1; i++){
    total += customCountVowel(str[i]);
}
// console.log(total); // 3

let arr = ["mAsAI", "sCHOOl"];
let total1 = 0;
for(let i=0; i<=arr.length-1; i++){
    let str = arr[i];
    for(let j=0; j<=str.length-1; j++){
        total1 += customCountVowel(str[j]);
    }
}
// console.log(total1); // 5

{
    function countVowels(str){
        let lowerVowel = "aeiou";
        let upperVowel = "AEIOU";
        let count = 0;
        for(let i=0; i<=str.length-1; i++){
            for(let j=0; j<=lowerVowel.length-1; j++){
                if(str[i] == lowerVowel[j]){
                    count++;
                }else{
                    if(str[i] == upperVowel[j]){
                        count++;
                    }
                }
            }
        }
        return count;
    }

    // console.log(countVowels("hEllO"));

    let arr = ["mAsAI", "sCHOOl"];
    let total = 0;
    for(let m=0; m<=arr.length-1; m++){
        let word = countVowels(arr[m]);
        total = total + word;
    }
    console.log(total); // 5
}