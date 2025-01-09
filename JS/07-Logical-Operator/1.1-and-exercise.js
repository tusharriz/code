let a = true;
let b = true;

console.log(a && b); // true

a = true;
b = false;
console.log(a && b); // false

a = false;
b = true;
console.log(a && b); // false

a = false;
b = false;
console.log(a && b); // false