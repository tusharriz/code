let arr = [
    {
        grade: "V",
        students: [
            { name: "Nrupul", marks: [10, 20, 30] },
            { name: "Prateek", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VI",
        students: [
            { name: "Aman", marks: [10, 20, 30] },
            { name: "Albert", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VII",
        students: [
            { name: "Yogesh", marks: [10, 20, 30] },
            { name: "Sandhya", marks: [20, 30, 40] }
        ]
    }
]


for (let i = 0; i <= arr.length - 1; i++) {
    let obj = arr[i]["students"];
    let studentOneTotal = 0;
    let studentTwoTotal = 0;

    for(let j=0; j<=obj.length-1; j++){
        let objMarks = obj[j]["marks"];
        
        for(let k=0; k<=objMarks.length-1; k++){
            if(j==0){
                studentOneTotal = studentOneTotal + objMarks[k];
            }else{
                studentTwoTotal = studentTwoTotal + objMarks[k];
            }
        }
    }
    if(studentOneTotal > studentTwoTotal){
        console.log(arr[i]["grade"]+"-"+arr[i]["students"][0]["name"]+"-"+studentOneTotal);
    }else{
        console.log(arr[i]["grade"]+"-"+arr[i]["students"][1]["name"]+"-"+studentTwoTotal);

    }
}

// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90




// HINT :

// let student = [
//     { name: "Nrupul", marks: [10, 20, 30] },
//     { name: "Prateek", marks: [20, 30, 40] }
// ];

// let stuOne = 0;
// let stuTwo = 0;
// for (let i = 0; i <= student.length - 1; i++) {
//     let stu = student[i]["marks"];

//     for (let j = 0; j <= stu.length - 1; j++) {
//         if (i == 0) {
//             stuOne = stuOne + stu[j];
//         } else {
//             stuTwo = stuTwo + stu[j];
//         }
//     }
// }
// if (stuOne > stuTwo) {
//     console.log(student[0]["name"], stuOne);
// } else {
//     if (stuTwo > stuOne) {
//         console.log(student[1]["name"], stuTwo)
//     }
// }