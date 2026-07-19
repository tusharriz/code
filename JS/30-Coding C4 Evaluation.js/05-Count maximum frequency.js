// Count maximum frequency

function maxFrequency(N, arr) {
  //Write Code here
  let obj = {};

  for (let i = 0; i <= N - 1; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  // console.log(obj);  // { '0': 2, '1': 4, '2': 1 }

  let max = -Infinity;
  let key = 0;

  for (let i in obj) {
    if (obj[i] > max) {
      max = obj[i];
      key = i;
    }
  }
  console.log(key + "-" + max);
}
maxFrequency(7, [1, 1, 1, 0, 2, 0, 1]); // 1-4


let arr = [1,1,1,0,2,0,1];
let obj = {};

for(let i=0; i<=arr.length-1; i++){
  if(obj[arr[i]] == undefined){
    obj[arr[i]] = 1;
  }else{
    obj[arr[i]]++;
  }
}
// console.log(obj); //{ '0': 2, '1': 4, '2': 1 }

let max = -Infinity;
let index = 0;

for(let key in obj){
  if(obj[key] > max){
    max = obj[key];
    index = key;
  }
}
console.log(index+"-"+max); // 1-4


