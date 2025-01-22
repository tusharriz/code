let obj = {
    grade: "V",
    students: 
            [
                {name: "Ram", marks: [10, 20, 30]},
                // {name: "Sham", marks: [20, 30, 40]}
            ]
};
// console.log(obj);

let arr = obj["students"];
// console.log(arr)
// console.log(arr.length);
let temp = 0;

for(let i=0; i<=arr.length-1; i++){
    let obj = arr[i];
    // console.log(obj["marks"]);
    
    for(let j=0; j<obj["marks"].length; j++){
        let itrt = obj["marks"][j]
        // console.log(itrt);
        temp = temp + itrt
    }

}
    // console.log(temp);    

// let array = [20, 20, 30];
// let plus = 0;
// for(let i=0; i<=array.length-1; i++){
//     plus=plus+array[i];
// }
// console.log(plus);