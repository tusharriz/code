// Masai Palindromic Substring

function masaiPalSubString(S){
    //write code here
    let arr = [];
    for(let i=0; i<=S.length-1; i++){
        let bag = "";
        for(let j=i; j<=S.length-1; j++){
            
            bag = bag + S[j];
            // console.log(bag);
            
            let nstr = "";
            for(let k=bag.length-1; k>=0; k--){
                nstr = nstr + bag[k];
                // console.log(nstr);
            }
            
            if(nstr == bag){
                arr.push(nstr);
            }
        }
    }
    // console.log(arr);
    
    let max = -Infinity;
    
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i].length > max){
            max = arr[i].length;
        }
    }
    console.log(max);
}
masaiPalSubString("thisracecarisgood") // 7

let s = "thisracecarisgood";
// let s = "madam";
let ssArr=[];
for(let i=0; i<=s.length-1; i++){
    let bag = "";
    for(let j=i; j<=s.length-1; j++){
        bag = bag + s[j];
        ssArr.push(bag)
    }
}
// console.log(ssArr);
let palinArr=[];
for(let j=0; j<=ssArr.length-1; j++){
    let word = ssArr[j];
    let str = "";
    for(let k=word.length-1; k>=0; k--){
        str = str + word[k];
        if(word==str){
            palinArr.push(str);
        }
    }
}
console.log(palinArr);

let max = -Infinity;
for(let k=0; k<=palinArr.length-1; k++){
    if(palinArr[k].length > max){
        max = palinArr[k].length;
    }
}
console.log(max); // 7