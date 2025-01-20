// how to update value in object;
//change the name "Ram" to "Shayam"

let obj = {
    name : "Ram",
    age : 26,
    gender : "male",
    city : "Delhi",
    hobbies : "coding"
};

obj["name"] = "Shayam";

console.log(obj);

// {
//     name: 'Shayam',
//     age: 26,
//     gender: 'male',
//     city: 'Delhi',
//     hobbies: 'coding'
// }