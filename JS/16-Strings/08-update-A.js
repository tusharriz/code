// update A to 6th index

let str = "superman";
let nstr = "";

for(let i=0; i<=str.length-1; i++){
    if(i == 6){
        nstr = nstr + "A";
    }else{
        nstr = nstr + str[i];
    }
}
console.log(nstr); // supermAn