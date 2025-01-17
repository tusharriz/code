// replace the last vegetable with a fruit named apple

let veg=["Potato", "Tomato", "Egg Plant", "Cucumber"];

veg[4] = "apple";
console.log(veg);
// OR
veg[veg.length-1] = "apple";  
console.log(veg);
//OR
veg[6] = "apple";
console.log(veg);

// [
//     'Potato',
//     'Tomato',
//     'Egg Plant',
//     'Cucumber',
//     'apple',
//     <1 empty item>,
//     'apple'
// ]


console.log(veg[10]); // wrong way, 10th index is not present in the array it will give you undefined 

console.log(veg[-1]); // wrong way, index cannot be negative, it will give you undefined
