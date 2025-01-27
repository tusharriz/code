// Write code to calculate the average of an array
// If there are no items in the array it should return 0

function sum(arr){
    let sum = 0;

    if(arr.length === 0){
        return 0;
    }else{
        for(let i=0; i<=arr.length-1; i++){
            sum = sum + arr[i];
        }
        return sum;
    }
    
}
console.log(sum([1,2,3,4,5])); // 15

// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

let arr = [2,3,4,5];
let average = sum(arr) / arr.length;
console.log(average); // 3.5