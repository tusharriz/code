// Area and Perimeter

`You are given the sides of the rectangle 1: L1 and B1 and sides of the rectangle 2 : L2 and B2.
You need print if area of rectangle 1 is greater than rectangle 2.
You need print if perimeter of rectangle 1 is greater than rectangle 2.

Sample Input 1 
1 2 2 3
Sample Output 1
false
false
`
let l1 = 1;
let b1 = 2;
let l2 = 2;
let b2 = 3;

let areaoOfRectangle1 = l1 + b1;
let areaoOfRectangle2 = l2 + b2;

let perimeterOfRectangle1 = 2 * (l1 + b1);
let perimeterOfRectangle2 = 2 * (l2 + b2);

console.log(areaoOfRectangle1 > areaoOfRectangle2);
console.log(perimeterOfRectangle1 > perimeterOfRectangle2);

// false
// false

