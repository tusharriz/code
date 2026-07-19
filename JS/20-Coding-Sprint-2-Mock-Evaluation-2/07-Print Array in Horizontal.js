// Print Array in Horizontal

function printHorizontalArray(arr){
    //write code here
    let bag = "";
    for(let i=0; i<=arr.length-1; i++){
        bag = bag + arr[i] + " ";
    }
    console.log(bag);
}
printHorizontalArray([1,2,3,4,5]); // 1 2 3 4 5