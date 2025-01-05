//Bad Practices

// Let z=15;
//console.log(z); // SyntaxError: Unexpected identifier 'z'

// let "d"=13;
// console.log("d"); // SyntaxError: Unexpected string

//let first name="Ram";
//console.log(na me); // SyntaxError: Unexpected identifier 'na'


// Good Practices

let z = 15;
let d = 13;
let userName = "siyaram";
let first_name = "Ram";

console.log(z); //15
console.log(d); //13
console.log(userName); //siyaram
console.log(first_name); //Ram



//Bad Practices
// 1. The variable name cannot start with a number.
// let 123abc=67; Not Possible

// Good Practices
let abc123=56; //right
let abc123lkj=89; //right



// 2. The variable name cannot get started with a symbol except "$" and "_".

//Bad Practices
// let #abc=67; //wrong
// let @tyu=89; //wrong

// Good Practices
let $abc=89; //right
let _ghj=89; //right



// 3. The variable names should be self explanatory.

//Bad Practices
// let name1="Ram";
// let name2="Lakhan";
// let name3="Dashrath";

// Good Practices
let candidate_name="Ram";
let brother_name="Lakhan";
let father_name="Dashrath";


// 4. We cannot use a keyword as a variable name
// for e.g. :- 
// let, var, const, for, while, if, else etc.


// 5. Naming Convention

let candidateName="Kumar"; // camelCase
let user_name="Ram"; // snake_case


