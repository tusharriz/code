// Check Vowel

`You are given a string, whose size is stored in a variable with the name N
The string is stored in a variable with the name str
You have to print true , if the string contains at least one vowel, otherwise print fals
e
For example, consider the value stored in N = 6 , and the value stored in str = "nru
pul" , then the output will be true , since the string contains the vowel u twice
Note : The string only contains lowercase English alphabets
Note : The vowels in the English Alphabet are considered the following - a,e,i,o,u

Sample Input 1 
4
stvr
Sample Output 1
false`

let str = "stvr";
let vowel = "aeiou";
let flag = false;
for(let i=0; i<=str.length-1; i++){
    for(let j=0; j<=vowel.length-1; j++){
        if(str[i]==vowel[j]){
            flag = true;
            break;
        }
    }
}
console.log(flag); // false


