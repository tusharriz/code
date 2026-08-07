// find the k value in array. if found print "found" else "not found";

let arr = [2,5,7,3,7,4];

let k = 5;

let flag = false;

for(let i=0; i<=arr.length-1; i++){

    if(k === arr[i]){
        flag = true;
        break;
    }
}

if(flag === true){
    console.log("found"); // found
}else{
    console.log("404 not found");
}

// OR

let count = 0;

for(let i=0; i<=arr.length-1; i++){

    if(k === arr[i]){
        count++;
        break;
    }
}

if(count > 0){
    console.log("found"); // found
}else{
    console.log("404 not found");
}