//  addStudentDetails

let db = {
    students : [],

    addStudent : function(name, age, id, htmlMarks, cssMarks, jsMarks){

        let obj = {name, age, id, htmlMarks, cssMarks, jsMarks};

        this.students.push(obj);
    }
}

db["addStudent"]("Baman",26,"st234",87,90,83);
db["addStudent"]("Jaman",27,"st244",84,95,84);
db["addStudent"]("Naman",25,"st237",82,40,85);
db["addStudent"]("Aaman",23,"st233",80,60,63);

console.log(db["students"]);

// [
//   {
//     name: "Baman",
//     age: 26,
//     id: "st234",
//     htmlMarks: 87,
//     cssMarks: 90,
//     jsMarks: 83,
//   },
//   {
//     name: "Jaman",
//     age: 27,
//     id: "st244",
//     htmlMarks: 84,
//     cssMarks: 95,
//     jsMarks: 84,
//   },
//   {
//     name: "Naman",
//     age: 25,
//     id: "st237",
//     htmlMarks: 82,
//     cssMarks: 40,
//     jsMarks: 85,
//   },
//   {
//     name: "Aaman",
//     age: 23,
//     id: "st233",
//     htmlMarks: 80,
//     cssMarks: 60,
//     jsMarks: 63,
//   },
// ];

