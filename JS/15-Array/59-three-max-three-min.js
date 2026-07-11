// three max three min 

let arr = [1, 2, 3, 4, 2, 1, 6, 5];


let min = Infinity;
let smin = Infinity;
let tmin = Infinity;
let firstMax = -Infinity;
let secondMax = -Infinity;
let thirdMax = -Infinity;

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
        tmin = smin;
        smin = min;
        min = arr[i];
    } else if (arr[i] < smin && arr[i] > min) {
        tmin = smin;
        smin = arr[i];
    } else if (arr[i] < tmin && arr[i] > smin) {
        tmin = arr[i];
    }
}


for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > firstMax) {
        thirdMax = secondMax;
        secondMax = firstMax;
        firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] < firstMax) {
        thirdMax = secondMax;
        secondMax = arr[i];
    } else if (arr[i] > thirdMax && arr[i] < secondMax) {
        thirdMax = arr[i];
    }
}

if (min == Infinity || smin == Infinity || tmin == Infinity) {
    console.log("Not Possible");
} else {
    console.log(min, smin, tmin); // 7
}

if (firstMax == -Infinity || secondMax == -Infinity || thirdMax == -Infinity) {
    console.log("Not Possible");
} else {
    console.log(thirdMax, secondMax, firstMax); // 7
}

