// how to add new key value in object;
//add the "salary" as a key and "1cr" as a value

let obj = {
  name: "Ram",
  age: 26,
  gender: "male",
  city: "Delhi",
  hobbies: "coding",
};

obj["salary"] = "1Cr"; // adding
obj["age"] = 27; // updating
console.log(obj);

// {
//   name: 'Ram',
//   age: 27,
//   gender: 'male',
//   city: 'Delhi',
//   hobbies: 'coding',
//   salary: '1Cr' 
// }

//1==> When the key is present inside the object and i am assigning a new value to it, that thing will get updated.

//2==> When the key is not present inside the object and i am assigning a value to it, that particular will get added.