// //print all elements in the new line

//first of all how to print all the elements of arr.

let arr = [1,2,3];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// 1
// 2
// 3

//now, how to print 2 element of the array
let array = [[1,2,3],[4,5,6],[7,8,9]];
console.log(array[2]); // [ 7, 8, 9 ]

//now how to print 5 from the array;
console.log(array[1][1]); // 5

//now run a loop on array to print all the elements in the next line

for(let i=0; i<=array.length-1; i++){
    for(let j=0; j<=array.length-1; j++){
        console.log(array[i][j]);
    }
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
