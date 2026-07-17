let arr = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr.length-1);
// output
// 1
// 5
// 9
// 3
// 5
// 7

// for(let i=0; i<=arr.length-1; i++){
//     for(let j=i; j<=i; j++){
//         console.log(arr[i][j]);
//     }
// }

// OR

// for(let i=0; i<=arr.length-1; i++){
//     for(let j=0; j<=arr.length; j++){
//         if(i==j){
//             // console.log(arr[i][j]);
//         }
//     }
// }

// 1
// 5
// 9


// for(let i=0; i<=arr.length-1; i++){
//     for(let j=0; j<=arr.length-1; j++){
//         if(i+j == 2){
//             console.log(arr[i][j]);
//         }
//     }
// }

// 1
// 5
// 9
// 3
// 5
// 7

{
let matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]
             ];

// 00 01 02
// 10 11 12
// 20 21 22

for(let i=0; i<=matrix.length-1; i++){
    for(let j=0; j<=matrix.length-1; j++){
        if(i==j){
            console.log(matrix[i][j]);
        }
        
    }
}

for(let i=0; i<=matrix.length-1; i++){
    for(let j=0; j<=matrix.length-1; j++){
        if(i+j == 2){
            console.log(matrix[i][j]);
            break;
        }
    }
}

}