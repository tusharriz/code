let obj = {
    name : "Ram",
    age : 26,
    gender : "male",
    address : {
        city : "Delhi",
        pin : "56614",
        house : "785"
    },
    hobbies : "coding"
};

//now print house value
console.log(obj["address"]["house"]); // 785

//add state inside object
obj["address"]["state"] = "Delhi";

console.log(obj);
// {
//   name: 'Ram',
//   age: 26,
//   gender: 'male',
//   address: { city: 'Delhi', pin: '56614', house: '785', state: 'Delhi' },
//   hobbies: 'coding'
// }


//delete pin from the object

delete obj["address"]["pin"];
console.log(obj);

// {
//    name: 'Ram',
//    age: 26,
//    gender: 'male',
//    address: { city: 'Delhi', house: '785', state: 'Delhi' },
//    hobbies: 'coding'
// }