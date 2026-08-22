let arr = [1,2,3];
arr[0] = 7; // here arr is a non-primitive data type that's why we change change the value; arr is mutable
console.log(arr); // [7,2,3] 

let str = "Car";
str[0] = "B"; // but, here str is primitive data type and we try to "change" the value, but value is not changed; because string is immutable
console.log(str); // Car 

let string = "Hello";
string = "World"; // here we do not change the value, we "reassigning" a new value;
console.log(string); // World


let a = [1,2,3];
let b = a;
let c = b;
c[0] = 5;
console.log(a); //  [ 5, 2, 3 ]

