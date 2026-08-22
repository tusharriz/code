// print all subtring of str;

let str = "happy";

for(let i=0; i<=str.length-1; i++){
    let bag = "";
    for(let j=i; j<=str.length-1; j++){
        bag+=str[j];
        console.log(bag);
    }
}
// h
// ha
// hap
// happ
// happy
// a
// ap
// app
// appy
// p
// pp
// ppy
// p
// py
// y