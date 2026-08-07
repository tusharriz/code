// You are given a string s , you have to find the count of all such substrings which start and ends with the same character.
// Print the count of total number of such substrings starting and ending with same characters
// Substrings of abcab which start and end with same characters, are a, abca, b, bcab, c, a, b.
// So total count is 7. Hence we print 7.

let str = "abcab"

for(let i=0; i<=str.length-1; i++){
    let bag = "";
    for(let j=i; j<=str.length-1; j++){
        bag += str[j];
        // console.log(bag);
        if(bag[0] == bag[bag.length-1]){
            console.log(bag);
        }
    }
}
// a
// abca
// b
// bcab
// c
// a
// b