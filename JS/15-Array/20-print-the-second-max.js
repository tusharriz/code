// print the second maximum element in the array;

// let arr=[1, 4, 6, 8, 3, 7, 2,];
let arr = [1, 2, 8, 5];

let firstMax = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= firstMax) {
        secondMax = firstMax;
        firstMax = arr[i];
    }
    else if (arr[i] > secondMax) {
        secondMax = arr[i];
    }
}

console.log(firstMax); // 8
console.log(secondMax); // 5

{
    // secons max

    let arr = [1, 2, 8, 5];
    let max = -Infinity;
    let sMax = -Infinity;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }else if (arr[i] > sMax && arr[i] < max) {
            sMax = arr[i];
        }
    }

    // for (let j = 0; j <= arr.length - 1; j++) {
    //     if (arr[j] > sMax && arr[j] < max) {
    //         sMax = arr[j];
    //     }
    // }
    console.log(max); // 8
    console.log(sMax); // 5

}
