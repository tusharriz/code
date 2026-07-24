let obj = {
    name : "Doremon",
    age : 17,
    city: "Tokyo"
}

let key = "age";
console.log(obj["key"]); // undefined

let obj1 = {
    name : "Doremon",
    age : 17,
    city: "Tokyo",
    key : true
}

let key1 = "age";
console.log(obj1["key"]); // true