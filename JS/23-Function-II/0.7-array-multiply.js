// multiply each array to another array;

function multarray(arr1, arr2){
    let narr = [];
    for(let i=0; i<=arr1.length-1; i++){
        narr.push(arr1[i] * arr2[i]);
    }
    return narr;
}

console.log(multarray([1,2,3,4,5],[6,7,8,9,10])); // [ 6, 14, 24, 36, 50 ]