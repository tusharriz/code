`Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...`

let day="wed";

switch(day){
  case "sun": console.log("SUNDAY");
              break;
  case "mon": console.log("MONDAY");
              break;
  case "tue": console.log("TUESDAY");
              break;
  case "wed": console.log("WEDNESDAY");
              break;
  case "thur": console.log("THURSDAY");
              break;
  case "fri": console.log("FRIDAY");
              break;
  case "sat": console.log("SATURDAY");
              break;
  default: console.log("Wrong Input")
}