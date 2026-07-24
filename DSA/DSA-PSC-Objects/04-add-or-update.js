// given an obj, key name and value add or update the key value in the obj.

let obj = {
    name : "Doremon",
    age : 17,
    city: "Tokyo"
}

let key = "salary";
let value  = 10;

obj[key] = value;
console.log(obj); // { name: 'Doremon', age: 17, city: 'Tokyo', salary: 10 }

