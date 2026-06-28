let x = (4 > 5) || (! (3 != 3))
console.log(x); //  True

let x = (4 > 5) && (! (3 != 3))
console.log(x); //  false

let a = !(5 != 5) || ( 2 >= 2 );
console.log(a); // true

let b = !(5 != 5) && ( 2 >= 2 );
console.log(b); // true

let b = !(5 != 5) && ( 2 > 2 );
console.log(b); // false

let b = !(5 != 5) || ( 2 > 2 );
console.log(b); // true

