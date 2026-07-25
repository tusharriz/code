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
// masaiPalSubString("thisracecarisgood"); // 7



let str = "thisracecarisgood";
// c
// ca
// car
let maxPalimdromeLenght = "";
let maxLength = 0;
for(let i=0; i<=str.length-1; i++){
    let bag = "";
    for(let j=i; j<=str.length-1; j++){
        bag = bag + str[j];
        // console.log(bag);

        let word = bag;
        // console.log(word);

        let rstr = "";
        for(let k=word.length-1; k>=0; k--){
            rstr += word[k];
        }
        // console.log(rstr);
        
        if(word == rstr){
            if(maxLength < word.length){
                maxLength = word.length;
                masaiPalSubString = word;
            }
        }
    }
}
console.log(masaiPalSubString); // racecar
console.log(maxLength); // 7