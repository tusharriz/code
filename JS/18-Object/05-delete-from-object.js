//how to delete from object
//delete city

let obj = {
    name : "Ram",
    age : 26,
    gender : "male",
    city : "Delhi",
    hobbies : "coding"
};

delete obj["city"]; // delete city from the object

console.log(obj);

// { name: 'Ram', 
//   age: 26, 
//   gender: 'male', 
//   hobbies: 'coding'
// }

obj["location"] = "Silicon Valley";

console.log(obj); 

// {
//     name: 'Ram',
//     age: 26,
//     gender: 'male',
//     hobbies: 'coding',
//     location: 'Silicon Valley'
// }