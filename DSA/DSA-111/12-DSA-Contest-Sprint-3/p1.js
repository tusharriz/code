// Problem 1 : Given an array containing only 0, 1 and 2 where 0 denotes 'x' , 1 denotes 'y' and 2 denotes 'z'.
//  Convert the array into respective string;
// For ex : [0 1 2 1 2 1]

// O/p : xyzyzy

let arr = [0, 1, 2, 1, 2, 1,];

let bag = "";

for(let i=0; i<=arr.length-1; i++){
    if(arr[i] === 0 ){
        bag += "x";
    }else if(arr[i] === 1){
        bag += "y"; 
    }else if(arr[i] === 2){
        bag += "z";
    }
}
console.log(bag); // xyzyzy

