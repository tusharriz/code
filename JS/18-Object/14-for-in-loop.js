// for in loop

let obj = {
  name: "Ram",
  age: 26,
  gender: "male",
  city: "Delhi",
  hobbies: "coding",
};

for (let i in obj) {
  console.log(obj[i]);
}

// Ram
// 26
// male
// Delhi
// coding

for (let i in obj) {
  console.log(i);
}

// name
// age
// gender
// city
// hobbies

for (let i in obj) {
  console.log(i, ":", obj[i]);
}

// name : Ram
// age : 26
// location : Delhi

for (let i in obj) {
  console.log(obj);
}

// {
//   name: 'Ram',
//   age: 26,
//   gender: 'male',
//   city: 'Delhi',
//   hobbies: 'coding'
// }
// {
//   name: 'Ram',
//   age: 26,
//   gender: 'male',
//   city: 'Delhi',
//   hobbies: 'coding'
// }
// {
//   name: 'Ram',
//   age: 26,
//   gender: 'male',
//   city: 'Delhi',
//   hobbies: 'coding'
// }
// {
//   name: 'Ram',
//   age: 26,
//   gender: 'male',
//   city: 'Delhi',
//   hobbies: 'coding'
// }
// {
//   name: 'Ram',
//   age: 26,
//   gender: 'male',
//   city: 'Delhi',
//   hobbies: 'coding'
// }