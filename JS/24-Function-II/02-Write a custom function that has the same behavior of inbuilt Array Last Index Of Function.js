// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

// let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3
// console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1

function customLastIndexOf(arr,findElement,fromIndex){

    if(fromIndex == undefined){
        start = arr.length-1;
    }else if(fromIndex < 0){
        start = arr.length - (fromIndex*-1);
    }else{
        start = fromIndex;
    }

    let flag = false;
    for(let i=start; i>=0; i--){
        if(arr[i] === findElement){
            flag = true;
            return i;
        }
    }

    if(flag == false){
        return -1;
    }
}
console.log(customLastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo'],"Dodo")); // 3
console.log(customLastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo'],"Tiger")); // 1
console.log(customLastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo'],"Penguin")); // 4
console.log(customLastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo'],"Nagin")); // -1
console.log(customLastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo'],"Dodo",2)); // 0
console.log(customLastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo'],"snake",-5)); // 0


let arr3 = [2, 5, 9, 2];
console.log(customLastIndexOf(arr3,2)); // 3
console.log(customLastIndexOf(arr3,7)); // -1
console.log(customLastIndexOf(arr3,2,3)); // 3
console.log(customLastIndexOf(arr3,2)); // 3
console.log(customLastIndexOf(arr3,2,2)); // 0
console.log(customLastIndexOf(arr3,2,-2)); // 0
console.log(customLastIndexOf(arr3,2,-1)); // 3
console.log(customLastIndexOf(arr3,2,-3)); // 0

let arr4 = [NaN];
console.log(customLastIndexOf(arr4)); // -1

let arr5 = [];
console.log(customLastIndexOf(arr4)); // -1

let arr6 = [1,,3];
console.log(customLastIndexOf(arr4,undefined)); // -1