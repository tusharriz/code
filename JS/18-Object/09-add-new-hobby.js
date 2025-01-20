//how to add new hobby to in hobbies array;

let details={
    name: "Chunnu",
    age:20,
    location: "Manali",
    hobbies: ["Coding", "Graphic Novels", "Movies"] //array
};

// very simple => using .push method 

details["hobbies"].push("Making Music");

console.log(details);

// {
//   name: 'Chunnu',
//   age: 20,
//   location: 'Manali',
//   hobbies: ['Coding', 'Graphic Novels', 'Movies', 'Making Music']
// }

