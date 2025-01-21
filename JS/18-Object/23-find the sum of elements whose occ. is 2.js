//find the sum of elements whose occ. is eual to 2 times

let arr=[7,2,7,3,4,4,2];
let obj = {};

for(let i=0; i<=arr.length-1; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    }else{
        obj[arr[i]]++;
    }
}

// console.log(obj); // { '2': 2, '3': 1, '4': 2, '7': 2 }

let sum = 0;

for(let key in obj){
    if(obj[key] == 2){
        sum = sum + Number(key);
    }
}
console.log(sum); // 
