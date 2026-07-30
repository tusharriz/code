let data = [
    { name: "Rahul", department: "Tech", salary: 60000, level: 1 },
    { name: "Rajan", department: "Finance", salary: 40000, level: 1 },
    { name: "Shubham", department: "Ops", salary: 30000, level: 1 },
    { name: "Mohan", department: "Marketting", salary: 35000, level: 1 },
    { name: "Sohan", department: "Tech", salary: 80000, level: 2 },
    { name: "Lalu", department: "Finance", salary: 60000, level: 2 },
    { name: "Sneha", department: "Ops", salary: 55000, level: 2 },
    { name: "Tanya", department: "Marketting", salary: 57000, level: 2 },
    { name: "Tushar", department: "Tech", salary: 90000, level: 3 },
    { name: "Prasad", department: "Finance", salary: 85000, level: 3 },
];

let employee = {
    data : [],
    addEmployee: function (name, department, salary, level) {
        // let obj = {};
        // obj["name"] = name;
        // obj["department"] = department;
        // obj["salary"] = salary;
        // obj["level"] = level
        // OR
        let obj = { name, department, salary, level};
        this.data.push(obj);
    },
}

// employee["addEmployee"](data[0]["name"], data[0]["department"], data[0]["salary"], data[0]["level"]);

for(let i=0; i<=data.length-1; i++){
    employee["addEmployee"](data[i]["name"],data[i]["department"],data[i]["salary"],data[i]["level"]);
}

console.log(employee["data"]);
// output:-
// [
//     { name: 'Rahul', department: 'Tech', salary: 60000, level: 1 },
//     { name: 'Rajan', department: 'Finance', salary: 40000, level: 1 },
//     { name: 'Shubham', department: 'Ops', salary: 30000, level: 1 },
//     { name: 'Mohan', department: 'Marketting', salary: 35000, level: 1 },
//     { name: 'Sohan', department: 'Tech', salary: 80000, level: 2 },
//     { name: 'Lalu', department: 'Finance', salary: 60000, level: 2 },
//     { name: 'Sneha', department: 'Ops', salary: 55000, level: 2 },
//     { name: 'Tanya', department: 'Marketting', salary: 57000, level: 2 },
//     { name: 'Raman', department: 'Tech', salary: 90000, level: 3 },
//     { name: 'Prasad', department: 'Finance', salary: 85000, level: 3 }
// ]
