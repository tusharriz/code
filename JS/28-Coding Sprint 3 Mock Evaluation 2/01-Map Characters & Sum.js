// Map Characters & Sum

function mapCharAndSum(N,K,str) {
    // Write code here
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    for(let i=0; i<=lower.length-1; i++){
        
        if(obj[lower[i]] === undefined){
            obj[lower[i]] = N;
            N++;
        }    
    }
    // console.log(obj);
    
    let total = 0;
    
    for(let j=0; j<=str.length-1; j++){
        for(let key in obj){
            if(str[j] === key){
                total += obj[key];
            }
        }
    }
    console.log(total);
}

mapCharAndSum(30,3,"abc"); // 93