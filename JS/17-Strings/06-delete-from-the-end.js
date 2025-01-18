// delete from the end

let str = "bills";

//remove s from the last
//you have 2 methods


// first methods: print till str.length-2 and concatenate into new sring

let nstr1 = "";

for(let i=0; i<=str.length-2; i++){
    nstr1 = nstr1 + str[i];
}
console.log(nstr1);


//second methods: skip the last char

let nstr = "";

for(let i=0; i<=str.length-1; i++){
    if(str[i] == str[str.length-1]){
        continue;
    }else{
        nstr = nstr + str[i];
    }
}
console.log(nstr); // bill

//or you can also use the break statement, when my str[i] == str.length-1, then break the loop

