// declaration and assigning a value;

// declaration and assigning a value in different line
let x; // declaration a variable only, not assigning any value to x.
x = 20; // assigning a value to x in the next line.
console.log(x);

// declaration and assigning a value in the same line
let y = 20; // here we declare a variable and assign a value to it in the same line.

// BOTH THE THING ARE SAME.    

// You can also declare multiple variables in one statement as seen in the syntax below.

let a = 50, b = 15, c = 20;
// and we can also print the all values in the same line using only one console.log
console.log(a,b,c); // 50 15 20

// The data inside variables is not constant. This means the data inside a variable can be changed.

let e = 200;
e = 100;

console.log(e); // 100 - print always the latest value.

// In the above example, the variable called "e" first contained the value 200 but after "e" = 100 means that a now contains the value 100.
