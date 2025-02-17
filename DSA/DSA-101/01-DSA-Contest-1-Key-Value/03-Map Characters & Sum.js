// Map Characters & Sum

function mapCharAndSum(N,K,str) {
    // Write code here
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    
    for(let i=0; i<=alphabet.length-1; i++){
        obj[alphabet[i]] = N;
        N++;
    }
    // console.log(obj);
    
    let sum = 0;
    for(let j=0; j<=K-1; j++){
        sum += obj[str[j]];
    }
    console.log(sum);
}
mapCharAndSum(30,3,"abc"); // 93