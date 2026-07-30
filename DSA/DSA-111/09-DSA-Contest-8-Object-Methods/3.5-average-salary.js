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
    data: [],
    addEmployee: function (name, department, salary, level) {
        // let obj = {};
        // obj["name"] = name;
        // obj["department"] = department;
        // obj["salary"] = salary;
        // obj["level"] = level
        // OR
        let obj = { name, department, salary, level };
        this.data.push(obj);
    },

    getEmployees: function () {
        for (let i of this.data) {
            console.log(i["name"]);
        }
    },

    getHighestSalaryEmployee: function () {
        let max = -Infinity;
        let obj;
        for (let i of this.data) {
            // console.log(i["salary"]);
            if (i["salary"] > max) {
                max = i["salary"];
                obj = i;
            }
        }
        console.log(max);
        console.log(obj);
    },

    getHighestSalaryByDepartment: function (department) {
        let max = -Infinity;
        let obj;
        for (let i of this.data) {
            if (department == i["department"]) {
                if (i["salary"] > max) {
                    max = i["salary"];
                    obj = i;
                }
            }
        }
        console.log(obj);
    },

    getHighestSalaryByLevel: function (level) {
        let max = -Infinity;
        let obj;
        for (let i of this.data) {
            if (level == i["level"]) {
                if (i["salary"] > max) {
                    max = i["salary"];
                    obj = i;
                }
            }
        }
        console.log(obj);
    },

    getAverageSalaryOfDepartment: function (department) {
        let arr = this.data;
        let total = 0;
        let count = 0;
        for (let i = 0; i <= arr.length - 1; i++) {
            if (department == arr[i]["department"]) {
                total += arr[i]["salary"];
                count++;
            }
            // console.log(arr[i]["salary"])
        }
        let average = total / count;
        console.log(average);
    },
}

// employee["addEmployee"](data[0]["name"], data[0]["department"], data[0]["salary"], data[0]["level"]);

for (let i = 0; i <= data.length - 1; i++) {
    employee["addEmployee"](data[i]["name"], data[i]["department"], data[i]["salary"], data[i]["level"]);
}

// console.log(employee["data"]);
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

employee["getAverageSalaryOfDepartment"]("Tech"); // 76666.66666666667
employee["getAverageSalaryOfDepartment"]("Finance"); // 61666.666666666664
employee["getAverageSalaryOfDepartment"]("Ops"); // 42500
employee["getAverageSalaryOfDepartment"]("Marketting"); // 46000
