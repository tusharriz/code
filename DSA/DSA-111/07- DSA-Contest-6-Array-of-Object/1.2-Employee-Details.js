// Employee Details

// Part 3:
// From the above users, Write a function i.e getRequiredSkillUser(users, required_skill)
// that will take an array i.e required_skill and above given users data as a input
// and print all the user name and email whose skills matches to required_skill.

// For Example :
// Sample Input 1
// required_skill = ['React', 'Redux'];
// users = [ ...  ]   # This data is already given above
// ​
// Sample Output 1
// Asab asab@asab.com
// Brook daniel@daniel.com
// John john@john.com
// ​
// Explanation
// skills of Asab is ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js']
// skills of Brook is ['HTML', 'CSS', 'JavaScript', 'React', 'Redux']
// skills of john is ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js']

// Out of all the given users,those user who know React and Redux are
// Asab, Brook and John
// ​
// Sample Input 2
// required_skill = ['HTML', 'CSS', 'JavaScript'];
// users = [ ...  ]   # This data is already given above
// ​
// Sample Output 2
// Alex alex@alex.com
// Asab asab@asab.com
// Brook daniel@daniel.com
// John john@john.com
// Daniel daniel@alex.com
// Thomas thomas@thomas.com

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
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

function getRequiredSkillUser(users, required_skill) {

  for (let key in users) {

    let bag = [];

    let array = users[key]["skills"];
    // console.log(array);

    for (let i = 0; i <= array.length - 1; i++) {
      // console.log(array[i]);

      for (let j = 0; j <= required_skill.length - 1; j++) {
        if (array[i] === required_skill[j]) {
          bag.push(array[i]);
        }
      }
    }
    // console.log(bag);

    if (bag.length === required_skill.length) {
      // console.log(key, users[key]["email"]);
    }
  }
}

// getRequiredSkillUser(users, ['React', 'Redux']); 
// Asab asab@asab.com
// Brook daniel@daniel.com
// John john@john.com

// getRequiredSkillUser(users, ['HTML', 'CSS', 'JavaScript']); 
// Alex alex@alex.com
// Asab asab@asab.com
// Brook daniel@daniel.com
// Daniel daniel@alex.com
// John john@john.com
// Thomas thomas@thomas.com

{
function getRequiredSkillUser(users, required_skill){
  for(let key in users){
    let arr = users[key]["skills"];
    // console.log(arr);

    let count = 0
    for(let i=0; i<=arr.length-1; i++){
      // console.log(arr[i])
      for(let k=0; k<=required_skill.length-1; k++){
        // console.log(required_skill[k])
        if(arr[i] == required_skill[k]){
          count++;
        }
      }
    }
    if(count == required_skill.length){
      console.log(key,users[key]["email"]);
    } 
  }
}
getRequiredSkillUser(users,['React', 'Redux']);
getRequiredSkillUser(users,['HTML', 'CSS', 'JavaScript']);
// Asab asab@asab.com
// Brook daniel@daniel.com
// John john@john.com
// Alex alex@alex.com
// Asab asab@asab.com
// Brook daniel@daniel.com
// Daniel daniel@alex.com
// John john@john.com
// Thomas thomas@thomas.com
}
