// add all the elements of the array;

let arr = [[1,2,3],[4,5,6],[7,8,9]];

let sum = 0;

for(let i=0; i<=arr.length-1; i++){
    for(let j=0; j<=arr.length-1; j++){
        sum += arr[i][j];
    }
}

console.log(sum); // 45