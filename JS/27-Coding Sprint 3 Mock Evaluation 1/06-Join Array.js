// Join Array

// - Write a custom function that has the same behavior of inbuilt Array Join Function

// - It takes two input parameter array and separator, and it will return the concatenated string join with a separator between each elements of the array

// Input 
// array - ["hello", "world", "bye"]
// char - "*"

// Output
// "hello*world*bye"

// let array = ["hello", "world", "bye"];

function customJoinArray(arr,seperator){
    let bag = "";
    for(let i=0; i<=arr.length-1; i++){
       if(i==arr.length-1){
        bag += arr[i];
       }else{
        bag += arr[i] + seperator;
       }
    }
    return bag;
}
console.log(customJoinArray(["hello", "world", "bye"],"*")); // hello*world*bye