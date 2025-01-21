// Find the element whose occ. is 1

let arr= [2,7,7,3,4,2];

let obj = {};

for(let i=0; i<=arr.length-1; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    }else{
        obj[arr[i]]++;
    }
}

// console.log(obj); // { '2': 2, '3': 2, '4': 1, '7': 2 }

for(let key in obj){
    if(obj[key] == 1){
        console.log(key);
    }
}

// 3
// 4