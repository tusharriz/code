// Write a custom function that has the same behavior of inbuilt Array Includes Function

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // Expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // Expected output: true

// console.log(pets.includes('at'));
// // Expected output: false

function customIncludes(arr,find,start){

    let flag = false;

    if(start === undefined){
        start = 0;
    }

    
     
    for(let i=start; i<arr.length; i++){
        if(arr[i] === find){
            flag = true;
            break;
        }
    }

    if(flag == true){
        return true;
    }else{
        return false;
    }
}

console.log(customIncludes([1, 2, 3],2)); // true
console.log(customIncludes(['cat', 'dog', 'bat'],"cat")); // true
console.log(customIncludes(['cat', 'dog', 'bat'],"at")); // false
console.log(customIncludes([1, 2, 3],3,-1)); // true
console.log(customIncludes([1, 2, 3],3,3)); // false
