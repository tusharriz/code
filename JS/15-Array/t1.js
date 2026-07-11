let arr = [1, 2, 23, 3, 2, 1, 3, 5];

let max = -Infinity;
let smax = -Infinity;
let tmax = Infinity;

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
        tmax = smax;
        smax = max;
        max = arr[i];
    }else if(arr[i] > smax && arr[i] < max){
        tmax = smax;
        smax = arr[i];
    }else if(arr[i] > tmax && arr[i] < smax){
        tmax = arr[i];
    }
}

console.log(max);
console.log(smax);
console.log(tmax);
console.log(max, smax, tmax);

