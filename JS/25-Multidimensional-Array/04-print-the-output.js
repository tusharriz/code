//print the output

// 1 2 3
// 4 5 6
// 7 8 9

let arr = [[1,2,3],[4,5,6],[7,8,9]];

for(let i=0; i<=arr.length-1; i++){

    let bag = "";

    for(let j=0; j<=arr.length-1; j++){
        bag += arr[i][j] + " ";
    }
    console.log(bag);
}

// 1 2 3
// 4 5 6
// 7 8 9

// 00 01 02
// 10 11 12
// 20 21 22

{


let arr = [[1,2,3],[4,5,6],[7,8,9]];
let bag = "";
for(let i=0; i<=arr.length-1; i++){
    for(let j=0; j<=arr.length-1; j++){
        bag += arr[j][i] + " ";
        if(j==arr.length-1){
            bag = bag + "\n";
        }
    }
}
console.log(bag);
// 1 4 7 
// 2 5 8 
// 3 6 9
}
