// delete a key;
// key = hobby;

let obj = {
    name : "Nobita",
    class : 9,
    age : 17,
    city : "Tokyo",
    hobby : "Study"
}

console.log(obj); // { name: 'Nobita', class: 9, age: 17, city: 'Tokyo', hobby: 'Study' }

delete obj["hobby"];

console.log(obj); // { name: 'Nobita', class: 9, age: 17, city: 'Tokyo' }
