let obj = {
    name: "Ram",
    age: 26,
    gender: "male",
    address: {
        city: "Delhi",
        pin: "56614",
        house: "785"
    },
    hobbies: "coding"
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

{
    let object = {
        name: "Nobita",
        age: 18,
        address: {
            country: "Japan",
            city: "Tokyo",
            pinCode: 404
        }
    }

    console.log(object["address"]["city"]); // Tokyo
    console.log(object["address"]["city"][0]); // T
    console.log(object["address"]["city"][1]); // o
    console.log(object["address"]["city"][2]); // k

    // add new in object;
    object["address"]["weather"] = "Spring"
    console.log(object);

    // Tokyo
    // T
    // o
    // k
    // {
    //     name: 'Nobita',
    //     age: 18,
    //     address: { country: 'Japan',
    //                city: 'Tokyo', 
    //                pinCode: 404, 
    //                weather: 'Spring'
    //              }
    // }

    // if you want to delete weather;

    delete object["address"]["weather"];

    console.log(object);

}