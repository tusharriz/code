let arr = [1,2,3,4,];
//I want to add 5 at the end so we use .push method

arr.push(5);
// console.log(arr); // [ 1, 2, 3, 4, 5 ]

//make your own push function
//add "e" ath the end

function push(arr,lastElement){
    let narr = [];

    for(let i=0; i<=arr.length-1; i++){
        if(i===0){
            narr += "[" + " " + "'" + arr[i] + "'" + ", ";
        }else if(i===arr.length-1){
            narr += "'" + arr[i] + "'" + "," + " " + "'" + lastElement + "'" + " " + "]";
        }else{
            narr += "'" + arr[i] + "'" + ", ";
        }
    }
    return narr;
}

console.log(push(["a","b","c","d"],"e")); // ["a","b","c","d","e"]

let arr2 = ["t","u","s","h","a"];
let result = push(arr2,"r");
console.log(result); // [ 't', 'u', 's', 'h', 'a', 'r' ] 
