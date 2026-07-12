//what if I do

let details={
    name: "Chunnu",
    age:20,
    location: "Manali",
    hobbies: ["Coding", "Graphic Novels", "Movies"] //array
};

// details["hobbies"] = "Making Music"; // guess the output
//if I directly add "Making Music" to hobbies it will remove the whole array and the output will like this

// let details={
//     name: "Chunnu",
//     age:20,
//     location: "Manali",
//     hobbies: "Making Music"
// };

//basically it will update the hobbies.
// added something inside array use .push method

details["hobbies"][3] = "Making Music";
console.log(details);

// {
//   name: 'Chunnu',
//   age: 20,
//   location: 'Manali',
//   hobbies: ['Coding', 'Graphic Novels', 'Movies', 'Making Music']
// }

console.log(details["hobbies"][13]); // undefined