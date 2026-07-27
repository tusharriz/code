let pam = [1,2,2,3,4,5];
let jim = [1,2,3,4,5,5];
let pamobj = {};
let jinobj = {};

// first adding elements in the obj for both pam and jin
for(let ele of pam){
    if(pamobj[ele] == undefined){
        pamobj[ele] = 1;
    }
}
console.log(pamobj); // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1 }

for(let ele of jim){
    if(jinobj[ele] == undefined){
        jinobj[ele] = 1;
    }
}
console.log(jinobj); // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1 }

// now, create an empty obj and add both common keys
let commonobj = {};

for(let key in pamobj){
    if(commonobj[key] == undefined){
        commonobj[key] = pamobj[key];
    } 
}
console.log(commonobj); // { '1': 1, '2': 1, '3': 1, '4': 1 }

for(let key in jinobj){
    if(commonobj[key] == undefined){
        commonobj[key] = jinobj[key];
    }else{
        commonobj[key]++;
    }
}
console.log(commonobj); //{ '1': 2, '2': 2, '3': 2, '4': 2, '5': 1 }

let flag = true;
for(let key in commonobj){
    if(commonobj[key] !== 2){
        flag = false;
        console.log("No");
        break;
    }
}
if(flag == true){
    console.log("Yes");
}
