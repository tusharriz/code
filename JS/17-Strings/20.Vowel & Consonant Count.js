// Vowel & Consonant Count 

`You are given a string, stored in a variable with the name, str
The size of the string is stored in another variable with the name N
You have to find the count of vowels, and consonants in the string, and print it
For example, consider the value stored in str = "nrupul" , and the value stored in N = 6 , then the vowels, in the string is u , which is present twice. Therefore, the count of vowels becomes 2, and the rest of the characters are consonants, so the count of consonants becomes 4. Therefore, the required output will be
2 4
Note : All characters in the string are lowercase English alphabets
Note : The vowels in the English alphabet are the following - a,e,i,o,u. All the characters are considered as consonants

Sample Input 1 
6
ankush
Sample Output 1
2 4`

let str = "ankush";
let vowel = "aeiou";
let vcount = 0;
let ccount = 0;

for(let i=0; i<=str.length-1; i++){
    for(let j=0; j<=vowel.length-1; j++){
        if(str[i]==vowel[j]){
            vcount++;
        }
    }
}

ccount = str.length - vcount; // 6 - 2 = 4
console.log(vcount, ccount); // 2 4