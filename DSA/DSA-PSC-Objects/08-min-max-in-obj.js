// find the max occuring value and min occuring value in obj

let obj = { a: 4, b: 2, c: 1 };
// min = 1, max = 4

// console.log(obj["a"])

if(obj["a"] > obj["b"] && obj["a"] > obj["c"]){
    console.log("max = a " +  obj["a"])
}else if(obj["b"] > obj["a"] && obj["b"] > obj["c"]){
    console.log("max = b " + obj["b"])
}else if(obj["c"] > obj["a"] && obj["c"] > obj["b"]){
    console.log("max = c " + obj["c"])
}

// for min
if(obj["a"] < obj["b"] && obj["a"] < obj["c"]){
    console.log("min = a " + obj["a"])
}else if(obj["b"] < obj["a"] && obj["b"] < obj["c"]){
    console.log("min = b " + obj["b"])
}else if(obj["c"] < obj["a"] && obj["c"] < obj["b"]){
    console.log("min = c " + obj["c"])
}

let min = Infinity;
let max = -Infinity;
let minKey;
let maxKey;

for(let key in obj){
    if(obj[key] < min){
        min = obj[key];
        minKey = key;
    }
    if(obj[key] > max){
        max = obj[key];
        maxKey = key
    }
}
console.log("Min Value is "+minKey, min);
console.log("Max Value is "+maxKey, max);