// World Cup Final 

`You are given three values, stored in variable with the following names
NzScore, NzSuperOver, NzFours
On the next line, you are given three more values stored in the variable with the following names
EngScore, EngSuperOver, EngFours
If the value of NzScore > EngScore, print "New Zealand"
Else if the value of NzScore < EngScore, print "England"
Else If the value of NzSuperOver > EngSuperOver, print "New Zealand"
Else if the value of NzSuperOver < EngSuperOver, print "England"
Else if the value of NzFours > EngFours, print "New Zealand"
Else if the value of Nzfours < EngFours, print "England"

Sample Input 1 
241 15 21
241 15 26
Sample Output 1
England
`

let NzScore = 241;
let NzSuperOver = 15;
let NzFours = 21;
let EngScore = 241;
let EngSuperOver = 15;
let EngFours = 26;

if(NzScore > EngScore){
    console.log("New Zealand");
}else if(NzScore < EngScore){
    console.log("England");
}else if(NzSuperOver > EngSuperOver){
    console.log("New Zealand");
}else if(NzSuperOver < EngSuperOver){
    console.log("England");
}else if(NzFours > EngFours){
    console.log("New Zealand");
}else if(NzFours < EngFours){
    console.log("England");
}

// England