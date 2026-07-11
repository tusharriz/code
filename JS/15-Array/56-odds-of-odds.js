// odds of odds

let arr = [1,2,4,9,9];

let count = 0;

for(let i=0; i<=arr.length-1; i++){
    if(arr[i]%2!=0){
        count++;
    }
}

console.log(count);

if(count%2!==0){
    console.log("Yes");
}else{
    console.log("No");
}