// how to print 4 only?

let arr = [[1,2,3],[4,5,6]];

console.log(arr[0]); // [1,2,3]
console.log(arr[1]); //[4,5,6]

console.log(arr[1][0]); // 4

// what happen if I do this

console.log(arr[1][3]); // undefined
// console.log(arr[2][1]); // Cannot read properties of undefined (reading '1')


let array = [["ram",1,2],[3,4,5]];
console.log(array[0][0][2]);// m

let arr1 = [1,2,3,[4,5,[6,"ram"]]];
console.log(arr1[3][1]);// 4
console.log(arr1[3][2][1][1]); // a