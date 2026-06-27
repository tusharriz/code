`You are given a number, stored in the variable, with the name num
Print the required value according to the following conditions
if
num = 1, print "Monday"
num = 2, print "Tuesday"
num = 3, print "Wednesday"
num = 4, print "Thursday"
num = 5, print "Friday"
num = 6, print "Saturday"
num = 7, print "Sunday"
It is guaranteed, that the value stored in num, will be in the range from 1 to 7

Sample Input 1 
2
Sample Output 1
Tuesday
`

let num = 2;

switch(num){
  case 1: console.log("Monday");
          break;
  case 2: console.log("Tuesday"); // Tuesday
          break;
  case 3: console.log("Wednesday");
          break;
  case 4: console.log("Thursday");
          break;
  case 5: console.log("Friday"); 
          break;
  case 6: console.log("Saturday"); 
          break;
  case 7: console.log("Sunday"); 
          break;
  default: console.log("Wrong Input");
}