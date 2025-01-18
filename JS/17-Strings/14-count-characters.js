// Given an array of string count the overall total number of characters

let arr = ["html", "css", "javascript"];

//count of elements in array
console.log(arr.length); // 3 

//count total numbers of characters of the strings

let count = 0;

for(let i=0; i<=arr.length-1; i++){
    count = count + arr[i].length;
}
console.log(count); // 17