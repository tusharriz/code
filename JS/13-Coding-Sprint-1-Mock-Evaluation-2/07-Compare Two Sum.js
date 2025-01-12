// Compare Two Sum

`You are given six numbers, stored in the variables with the following names
one, two, three, four, five, six
Find the value of sum1 and sum2 , such that
sum1 = one + two
sum2 = four + five
If both the following two conditions are true, print Yes , else print No
sum1 > three
sum2 > six

Sample Input 1 
1 2 3 4 5 6
Sample Output 1
No
`

let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let six = 6;

let sum1 = one + two;
let sum2 = four + five;

if(sum1 > three && sum2 > six){
    console.log("Yes");
}else{
    console.log("No");
}

// No