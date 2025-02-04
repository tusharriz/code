//print the output

// 1 2 3
// 4 5 6
// 7 8 9

let arr = [[1,2,3],[4,5,6],[7,8,9]];

for(let i=0; i<=arr.length-1; i++){

    let bag = "";

    for(let j=0; j<=arr.length-1; j++){
        bag += arr[i][j] + " ";
    }
    console.log(bag);
}

// 1 2 3
// 4 5 6
// 7 8 9