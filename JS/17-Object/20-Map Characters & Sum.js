// Map Characters & Sum

function mapCharAndSum(N,K,str) {
    // Write code here
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    let sum = 0;
    
    for(let i=0; i<=lower.length-1; i++){
        obj[lower[i]] = i+N;
    }
    // console.log(obj);
    
    for(let j=0; j<=str.length-1; j++){
        sum = sum + obj[str[j]];
    }
    console.log(sum);
}

// mapCharAndSum(30,3,"abc"); // 93

{
    let char = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    let n = 30;
    
    for(let i=0; i<=char.length-1; i++){
        let key = char[i];
        obj[key] = n+i;
    }
    // console.log(obj);
    
    let k = 3;
    let sum = 0;
    let count = 0;
    for(let key in obj){
        sum = sum + obj[key];
        count++;
        if(count == k){
            console.log(sum); // 93
            break;
        }
    }
}