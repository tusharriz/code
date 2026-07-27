// Write a program to create a object from two arrays.

// **Input :**
// Given two arrays one containing the class names and other containing the values
 
// **Sample Input**
// ['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII']
// [1, 2, 3, 4]

// **Expected Output:** 
// {Class-V: 1 , Class-VI: 2 , Class-VII: 3, Class-VIII: 4}

let arr1 = ['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII'];
let arr2 = [1,2,3,4];

let obj = {};

for(let i=0; i<=arr1.length-1; i++){
    obj[arr1[i]] = arr2[i];
}
console.log(obj); 

// { 'Class-V': 1, 'Class-VI': 2, 'Class-VII': 3, 'Class-VIII': 4 }


let classes = ['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII'];
let values = [1, 2, 3, 4];
let object = {};

for(let i=0; i<=classes.length-1; i++){
    object[classes[i]] = values[i];
}
console.log(object); // { 'Class-V': 1, 'Class-VI': 2, 'Class-VII': 3, 'Class-VIII': 4 }