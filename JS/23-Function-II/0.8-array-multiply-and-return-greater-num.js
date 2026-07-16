// multiply the array and return number will be greater than 100.js

function multarray(arr1, arr2){
    let narr = [];
    for(let i=0; i<=arr1.length-1; i++){
        narr.push((arr1[i] * arr2[i]));
    }
    return narr;
}

let array = (multarray([1,2,3,4,5],[10,20,30,40,50])); // 

for(let i=0; i<=array.length-1; i++){
    if(array[i] > 100){
        console.log(array[i]); // 160 250
    }
}