// delete r from the string


let str = "Superman";

let nstr = "";

for(let i=0; i<=str.length-1; i++){
    if(str[i]=="r"){
        continue;
    }else{
        nstr = nstr + str[i];
    }
}
console.log(nstr); // Supeman