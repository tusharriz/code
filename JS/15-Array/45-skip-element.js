//i want to skip "Pushpa" and "KGF".

let arr=["Bahubali", "Pushpa", "KGF", "Major"];

for(let i=0; i<=arr.length-1; i++){
    if(arr[i] == "Pushpa" || arr[i] == "KGF"){
        continue;
    }
    console.log(arr[i]);
}

// Bahubali
// Major