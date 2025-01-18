//count the names start with A letter

let arr=["Amit", "Nrupul", "Aman", "Varun", "Pulkit"];

let count = 0;

for(let i=0; i<=arr.length-1; i++){
    
    if("A" == arr[i][0]){
        count++;
    }
    
}
console.log(count);