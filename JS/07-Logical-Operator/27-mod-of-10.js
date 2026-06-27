`You are given a number stored in a variable with the name num
Find the value of x , such that
x = num % 10
Print the answer according to the following conditions
If
x = 0, print 'zero'
x = 1, print 'one'
x = 2, print 'two'
x = 3, print 'three'
x = 4, print 'four'
x = 5, print 'five'
x = 6, print 'six'
x = 7, print 'seven'
x = 8, print 'eight'
x = 9, print 'nine'
It is guaranteed, that the value of x will be between [0,9]
Note : All the values need to be printed without quotes

Sample Input 1 
12
Sample Output 1
two
`

let num = 12;

switch(x = num % 10){
    case 0: console.log("zero");
            break;
    case 1: console.log("one");
            break;
    case 2: console.log("two"); // two
            break;
    case 3: console.log("three");
            break;
    case 4: console.log("four"); 
            break;
    case 5: console.log("five"); 
            break;
    case 6: console.log("six"); 
            break;
    case 7: console.log("seven"); 
            break;
    case 8: console.log("eight"); 
            break;
    case 9: console.log("nine"); 
            break;
    default: console.log("Wrong Input");
  }