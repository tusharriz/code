//how to remove last hobby to in hobbies array;

let details={
    name: "Chunnu",
    age:20,
    location: "Manali",
    hobbies: ["Coding", "Graphic Novels", "Movies", "Making Music"] //array
};

// very simple => using .pop method 

details["hobbies"].pop();

console.log(details);

// {
//   name: 'Chunnu',
//   age: 20,
//   location: 'Manali',
//   hobbies: [ 'Coding', 'Graphic Novels', 'Movies' ]
// }
  