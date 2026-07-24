// given an obj and a key name, delte the key from the obj.
let obj = {
    name : "Doremon",
    age : 17,
    city: "Tokyo"
}

let key = "age";

console.log(obj); // { name: 'Doremon', age: 17, city: 'Tokyo' }

delete obj[key];

console.log(obj); // { name: 'Doremon', city: 'Tokyo' }

