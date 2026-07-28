// Employee Details

// Part 2:

// From the users, Write a function i.e getUsersByPoints(users, x)
// that will take the above users data and x value as input and
//  print all the user name whose points are equal to x.

// For Example :
// Sample Input 1
// x = 30;
// users = [ ...  ]   # This data is already given above
// ​
// Sample Output
// Alex alex@alex.com
// ​
// Explanation
// According to users data, those user whose points is 30 that is only Alex.

let users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    point: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

function getUsersByPoints(users, x){
    
    for(let key in users){
        if(users[key]["points"] === x){
            console.log(key, users[key]["email"]);
        }
    }
}
// getUsersByPoints(users, 30); // Alex alex@alex.com


{
function getUsersByPoints(users, x){
  for(let key in users){
    if(users[key]["points"] == x){
      console.log(key+" "+users[key]["email"]);
    }
  }
}
getUsersByPoints(users, 30); // Alex alex@alex.com
}