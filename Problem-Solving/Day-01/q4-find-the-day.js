// find the day after 85 day if today is wednesday;

let today = "Tuesday";
let jump = 50; // Wednesday

let todayNum;

if(today == "Sunday"){
    todayNum = 1;
}else if(today == "Monday"){
    todayNum = 2;
}else if(today == "Tuesday"){
    todayNum = 3;
}else if(today == "Wednesday"){
    todayNum = 4;
}else if(today == "Thursday"){
    todayNum = 5;
}else if(today == "Friday"){
    todayNum = 6;
}else if(today == "Saturday"){
    todayNum = 7;
}
// console.log(todayNum);

let theDayIs = todayNum + (jump % 7);
// console.log(jump % 7);
// console.log(theDayIs);

if(theDayIs == 1){
    console.log("Sunday");
}else if(theDayIs == 2){
    console.log("Monday");
}else if(theDayIs == 3){
    console.log("Tuesday");
}else if(theDayIs == 4){
    console.log("Wednesday");
}else if(theDayIs == 5){
    console.log("Thursday");
}else if(theDayIs == 6){
    console.log("Friday");
}else if(theDayIs == 7){
    console.log("Saturday");
}