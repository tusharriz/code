// This modulo operator "%" returns the remainder.

let a = 10;
let b = 2;

console.log(a/b); // ==>  2|10|5 ==> 5 is quotient
//                          10
//                           0

console.log(a%b); // ==>  2|10|5
//                          10
//                           0  ==> 0 is remainder

// we need remainder only to solve coding questions

console.log(10%2); // ==>  2|10|5
//                           10
//                            0  ==> 0 is remainder

// we need remainder only to solve coding questions

console.log(10%2); // 0
console.log(2%10); // 2 ==>  10|2|0
//                              0
//                              2  ==> 2 is remainder


// This modulo operator is often useful when you want to check if a number is odd or even.

let x = 10 % 2;
let y = 11 % 2;

console.log(x); // 0
console.log(y); // 1

// any even number %2 returns 0 while any odd number %2 returns 1.
