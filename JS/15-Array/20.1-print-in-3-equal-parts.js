// print in 3 equal parts
// print both output;
// 1 4 5
// 7 4 8
// 3 8 9

// and

// [1 4 5]
// [7 4 8]
// [3 8 9]

let arr = [1, 4, 5, 7, 4, 8, 3, 8, 9];

let count = 0;
let bag = "";
for (let i = 0; i <= arr.length - 1; i++) {
    bag += arr[i] + " ";
    count++;
    if (count == 3) {
        bag += "\n";
        count = 0;
    }
}
console.log(bag);

// 1 4 5
// 7 4 8
// 3 8 9

{
    let arr = [1, 4, 5, 7, 4, 8, 3, 8, 9];
    let narr = [];

    let count = 0;
    let bag = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        bag.push(arr[i]);
        count++;
        if (count == 3) {
            narr.push(bag)
            bag = [];
            count = 0;
        }
    }
    console.log(narr);
    // [ [ 1, 4, 5 ],
    //   [ 7, 4, 8 ],
    //   [ 3, 8, 9 ] ]
}

