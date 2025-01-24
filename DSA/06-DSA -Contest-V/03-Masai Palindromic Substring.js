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