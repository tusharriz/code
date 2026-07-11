// let arr = [9, 9, 8, 8, 7];
let arr = [59, 49, 68, 28, 77, 53];

let firstMax = -Infinity;
let secondMax = -Infinity;
let thirdMax = -Infinity;
let fourthMax = -Infinity;

for (let i = 0; i <= arr.length - 1; i++) {

    // if you want to skip duplicate element, use this following code
    // if (arr[i] === firstMax || arr[i] === secondMax || arr[i] === thirdMax || arr[i] === fourthMax) {
    //     continue; // Skip duplicates to avoid incorrect results
    // }

    if (arr[i] > firstMax) {
        fourthMax = thirdMax;
        thirdMax = secondMax;
        secondMax = firstMax;
        firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] < firstMax) {
        fourthMax = thirdMax;
        thirdMax = secondMax;
        secondMax = arr[i];
    } else if (arr[i] > thirdMax && arr[i] < secondMax) {
        fourthMax = thirdMax;
        thirdMax = arr[i];
    } else if (arr[i] > fourthMax && arr[i] < thirdMax) {
        fourthMax = arr[i];
    }


}


console.log(firstMax); // 9
console.log(secondMax); // 8
console.log(thirdMax); // 7
// console.log(fourthMax); // -infinity

// following code is for when we not found any element for the fourthmax then this following code print "Fourth max does not exist" insead of printing -infinity.

// Note :  this output is based on what output you want. If you want -infinity then do not use this following code or if you do not want -infinity then use this following code.

if (fourthMax !== -Infinity) {
    console.log(fourthMax);
} else {
    console.log("Fourth max does not exist");
}