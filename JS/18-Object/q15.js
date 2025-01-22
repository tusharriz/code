let obj = {
    grade: "V",
    students: [
        {name: "Ram", marks: [10, 20, 30]},
        // {name: "Sham", marks: [20, 30, 40]}
     ]
}
let arr = obj["students"];
// let arr1 = obj["students"][1]["marks"];
// console.log(arr)
let nsum = 0;

for(let i=0; i<=arr.length-1; i++){
    let obj = arr[i];
    // console.log(obj["marks"])
    nsum = nsum + (Number["marks"])
}
console.log(nsum);