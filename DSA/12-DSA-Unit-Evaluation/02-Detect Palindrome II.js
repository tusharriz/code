// Detect Palindrome II

function detectPalII(N, string){
    //write code here
    let obj={};
    
    for(let i=0; i<=N-1; i++){
       if(obj[string[i]] === undefined){
           obj[string[i]] = 1;
       }else{
           obj[string[i]]++;
       }
    }
    // console.log(obj);
    
    let oddCount = 0;
    
    for(let i in obj){
        if(obj[i]%2!==0){
            oddCount++;
        }
    }
    // console.log(oddCount);
    
    if(oddCount > 1){
        console.log("Not Possible!");
    }else{
        console.log("Possible!");
    }
}
detectPalII(6, "aabbcc"); // Possible!
detectPalII(5, "aabcd"); // Not Possible!