// Write a custom function that has the same behavior of inbuilt Array Slice Function

function customSlice(arr, start, end) {
  let narr = [];

  if (start === undefined && end === undefined) {
    return arr;
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = arr.length;
  }

  if (end < 0) {
    end = arr.length + end;
    // end = arr.length - (end * -1);
  }

  if (start < 0) {
    start = arr.length + start;
    // start = arr.length - (start * -1);
  }

  for (let i = start; i < end; i++) {
    if (!(i in arr)) {
      narr.push("empty");
    } else {
      narr.push(arr[i]);
    }
  }
  return narr;
}

console.log(customSlice(["ant", "bison", "camel", "duck", "elephant"], 2));
// // [ 'camel', 'duck', 'elephant' ]

console.log(customSlice(["ant", "bison", "camel", "duck", "elephant"], 2, 4));
// // [ 'camel', 'duck' ]

console.log(customSlice(["ant", "bison", "camel", "duck", "elephant"], 1, 5));
// // [ 'bison', 'camel', 'duck', 'elephant' ]

console.log(customSlice(["ant", "bison", "camel", "duck", "elephant"], -2));
// // ["duck", "elephant"]

console.log(customSlice(["ant", "bison", "camel", "duck", "elephant"], 2, -1));
// // [ 'camel', 'duck' ]

console.log(customSlice(["ant", "bison", "camel", "duck", "elephant"]));
// [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]

console.log(customSlice([1, 2, , 4, 5], 1, 4));
// [ 2, 'empty', 4 ]
