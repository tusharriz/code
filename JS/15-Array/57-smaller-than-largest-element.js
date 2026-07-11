let arr = [3, 3, 2, 1, 1];
// output : 3 3 -1 -1 -1

let max = -Infinity;

for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] >= max) {
    max = arr[i];
  }
}

let bag = "";
for (let j = 0; j <= arr.length - 1; j++) {
  if (arr[j] == max) {
    bag = bag + max + " ";
  } else {
    bag = bag + -1 + " ";
  }
}
console.log(bag); // 3 3 -1 -1 -1
