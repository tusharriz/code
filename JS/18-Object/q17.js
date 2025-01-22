let sch = {
    grade: "V",
    students: [
        {name: "Prateek", marks: [20, 30, 40]},
        {name: "Nrupul", marks: [10, 20, 30]}
        
     ]
}
let arr = sch["students"];
// console.log(arr)
let nsum = 0;
let stuname = null;

for(let i=0; i<=arr.length-1; i++){
    let obj = arr[i];
    // console.log(obj["marks"])
    let sum = 0;
    for(let j=0; j<obj["marks"].length; j++){
        sum = sum + obj["marks"][j];
    }
    if(nsum<sum){
        nsum=sum;
        stuname=obj["name"];
        
    }
    
}
// console.log(obj[nsum,stuname);
console.log(sch["grade"]+"-"+stuname+"-"+nsum);