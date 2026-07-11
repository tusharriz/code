//Bonus Ques

let arr=["Bahubali", "Pushpa", "KGF", "Major"];

//i want to skip "Pushpa" and "KGF".

let narr = [];
for(let i=0; i<=arr.length-1; i++){
    if(arr[i]=="Pushpa" || arr[i]=="KGF"){
        continue;
    }else{
        narr.push(arr[i]);
    }
    // console.log(arr[i]);
}
console.log(narr);