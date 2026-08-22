// find the count of subarray with have the sum of K = 15;

let arr = [7, 3, 5, 10, 8];
let count = 0;
let k = 15;
for (let i = 0; i <= arr.length - 1; i++) {
    let bag = 0
    for (let j = i; j <= arr.length - 1; j++) {
        bag += arr[j]
        if (bag == k) {
            count++;
        }
    }
}
// console.log(count); // 2

let count2 = 0;
for(let i=0; i<=arr.length-1; i++){
    let subArr = [];
    for(let j=i; j<=arr.length-1; j++){
        subArr.push(arr[j]);
        let ans = 0;
        for(let k=0; k<=subArr.length-1; k++){
            ans += subArr[k];
        }
        if (ans == k) {
            count2++;
        }
        // console.log(ans);
    }
}
console.log(count2); // 2