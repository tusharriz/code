`You are given the sides of the rectangle 1: L1 and B1 and sides of the rectangle 2 : L2 and B2.
You need print if area of rectangle 1 is greater than rectangle 2.
You need print if perimeter of rectangle 1 is greater than rectangle 2.`

// rectangle 1
let l1 = 1;
let b1 = 2;

// rectangle 2
let l2 = 2;
let b2 = 3;

//area of rectangle
let rectangle1 = l1 * b1;
let rectangle2 = l2 * b2;

//perimeter of rectangle
let perimeter1 = (l1 + b1) * 2;
let perimeter2 = (l2 + b2) * 2;


//area of rectangle
console.log(rectangle1 > rectangle2); // false

//perimeter of rectangle
console.log(perimeter1 > perimeter2); // false