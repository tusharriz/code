// Write a function to multiply each element of two arrays 

function arrayMultiply(arr1,arr2){

    let arr = [];
    let largeArr = [];
    for(let i=0; i<=arr1.length-1; i++){
        arr.push(arr1[i]*arr2[i]);
    }

    for(let i=0; i<=arr.length-1; i++){
        if(arr[i] >= 100){
            largeArr.push(arr[i]);
        }
    }
    return largeArr; // [ 160, 250 ]
}
console.log(arrayMultiply([1,2,3,4,5],[10,20,30,40,50])); // [ 10, 40, 90, 160, 250 ]