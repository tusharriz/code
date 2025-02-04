let arr = [[1,2,3],[4,5,6],[7,8,9]];

//output

// 1
// 4
// 7
// 2
// 5
// 8
// 3
// 6
// 9

for(let i=0; i<=arr.length-1; i++){
    for(let j=0; j<=arr.length-1; j++){
        console.log(arr[j][i]);
    }
}

// 1
// 4
// 7
// 2
// 5
// 8
// 3
// 6
// 9