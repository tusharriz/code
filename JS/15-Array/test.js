// find prime;

let num = 22;
let prime = "";
let arr = [];
for (let i = 1; i <= num; i++) {
    let factor = 0;
    for (let j = 1; j <= i; j++) {
        if (i %j == 0) {
            factor++;
        }
    }
    if (factor == 2) {
        arr.push(i);
    }
}
console.log(arr);

let sum = 0;
for(let i=0; i<=arr.length-1; i++){
    if(i%2==0){
        sum = sum + arr[i];
    }
}
console.log(sum);