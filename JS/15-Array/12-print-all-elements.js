// Print all the elements of an array;
let names = ["Om","Hari","Ram","Prasad","Krishna"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

//what if, there are 50 or 100 elements in an array, then this way is very tds task.
//better solution is, we use loops;

for(let i=0; i<=names.length-1; i++){
    console.log(names[i]);
}