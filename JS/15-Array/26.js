let arr=[]; //empty array

arr.push("Batman");
arr.push("Superman");
arr.push("Flash", "Green Lantern");

console.log(arr.length); // 4
console.log(arr); // [ 'Batman', 'Superman', 'Flash', 'Green Lantern' ]

console.log(arr[arr.length-8]); // undefined