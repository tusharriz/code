let a = (5<3) || (8>6); // true
let b = !(4<=4) && (7==7); // false
let c = (2 > 1) && (4 < 5); // true
let d = (7==7) || (3!=3); // true
let e = (9<=9) || (6>=8); // true
let f = (10>=10) && (2<8); // true 
let g = !(5>6); // true
let h = (5!=5) && (9>7) || (2<=2); // true
let i = (3>4) && (1<2) || (6>=6); // true
let j = (3>1) && (4==4) || (5<3); // true
let k = !(6==6) || (8<7); // false
let l = !(8>5) || (3==3) && (2!=2); // false
let m = (4<6) && (2==2) || !(7<=7); // true
let n = (7>=8) || !(3<5); // false
let o = (4 <= 4) || !(7 >= 6) && (2 == 2); // true
let p = (2 > 1) && ((3 == 3) || !(4 < 5)); // true
let q = (6 == 6) || (4 >= 5) && !(2 < 3); // true
let r = !(5 <= 4) || ((7 > 6) && (3 != 3)); // true
let s = !(7 <= 8) && (5 > 3) || (9 != 9); // false
let t = (3 != 2) && (5 == 5) || (!(9 > 8)); // true
let u = (10 == 10) && (!(6 < 7) || (8 > 5)); // true
let v = (!(4 <= 4) || (7 == 7)) && ((2 > 3) || !(5 <= 5)); // false
let w = (!(9 != 9) && (7 >= 6)) || ((3 == 3) && !(2 <= 2)) && ((5 < 5) || !(8 > 7)); // true
let x = (10 != 10) && (!(8 >= 8) || (6 < 5)) || ((3 > 2) && !(7 < 6)); // true
let y = ((6 <= 6) && !(4 > 3)) || (!(2 == 2) && (8 < 9)) || ((5 >= 5) && !(1 != 1)); // true

// Q. 26 
if (1 > 2) {
console.log("N");
} else if (2 > 1) {
if (4 == 4) {
console.log("O");
} else {
console.log("P");
}
} else {
console.log("Q");
}
// answer = O

// Q.27
if (9 == 9) {
console.log("V");
if (5 != 5) {
console.log("W");
} else if (7 >= 6) {
console.log("X");
} else {
console.log("Y");
}
} else {
console.log("Z");
}
// answer = VX


// Q.28
if (3 >= 3) {
if (2 <= 2) {
console.log("FF");
}
if (1 != 1) {
console.log("GG");
} else {
console.log("HH");
}
} else {
console.log("II");
}
// answer = FF HH

// Q.29
if (2 >= 2) {
console.log("F");
if (5 < 4) {
console.log("G");
} else {
console.log("H");
}
} else {
console.log("I");
}
// answer = FH

// Q.30
if (4 < 2) {
console.log("C");
} else if (3 == 3) {
console.log("D");
} else {
console.log("E");
}
// answer = D

// Q.31
if (5 > 3) {
console.log("A");
} else {
console.log("B");
}
// answer = A

// Q.32
if (2 < 3) {
console.log("AA");
} else if (3 < 4) {
console.log("BB");
} else if (4 < 5) {
console.log("CC");
} else {
console.log("DD");
}
console.log("EE");
// answer = AAEE

// Q.33
if (10 < 5) {
console.log("JJ");
} else {
if (4 > 3) {
if (2 == 2) {
console.log("KK");
} else {
console.log("LL");
}
}
console.log("MM");
}
// answer = KKMM

// Q.34
if (6 <= 5) {
console.log("R");
} else if (8 > 7) {
console.log("S");
} else {
if (3 > 2) {
console.log("T");
}
console.log("U");
}
// answer = S

// Q.35
if (7 != 7) {
console.log("J");
} else {
if (3 <= 3) {
console.log("K");
} else {
console.log("L");
}
console.log("M");
}
// answer = KM