// add A to 6th index

let str = "superman";
//output: supermAan

let nstr = "";

for(let i=0; i<=str.length-3; i++){
    nstr = nstr + str[i];
}

console.log(nstr); // superm
nstr = nstr + "A";
console.log(nstr); // supermA

for(let j=str.length-2; j<=str.length-1; j++){
    nstr = nstr + str[j];
}
console.log(nstr); //supermAan

