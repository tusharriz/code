// count the string start and end with the same character;
// str = "misisippi";

function countStr(str){
    let count = 0;
    for(let i=0; i<=str.length-1; i++){
        let bag = "";
        for(let j=i; j<=str.length-1; j++){
            bag+=str[j];
            if(bag[0]===bag[bag.length-1]){
                count++;
                console.log(bag);
            }
        }
    }
    console.log(count); // 17
}

countStr("misisippi");

// m
// i
// isi
// isisi
// isisippi
// s
// sis
// i
// isi
// isippi
// s
// i
// ippi
// p
// pp
// p
// i