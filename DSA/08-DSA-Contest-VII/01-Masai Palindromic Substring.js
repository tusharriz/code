function masaiPalSubString(S){
    //write code here
    
    let arr = [];
    
    // running a loop on S
    for(let i=0; i<=S.length-1; i++){
        
        //create a sunstring and add into bag
        let bag = "";
        for(let j=i; j<=S.length-1; j++){
            bag = bag + S[j];
            // console.log(bag);
            
            //reverse the bag string and add into nstr
            let nstr = "";
            for(let k=bag.length-1; k>=0; k--){
                nstr = nstr + bag[k];
            }
            // console.log(nstr);
            
            //comparing the bag string into nstr string and pushing into arr
            if(bag === nstr){
                arr.push(nstr);
            }
        }
    }
    // console.log(arr);
    
    //find the max length of the string
    let max = -Infinity;
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i].length > max){
            max = arr[i].length;
        }
    }
    console.log(max);
}
masaiPalSubString("thisracecarisgood"); // 7