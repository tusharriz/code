// Map Numbers

function mapNumbers(N,K){
    //write code here
    let obj = {};
    
    for(let i=1; i<=N; i++){
        obj[i] = K;
        K++;
    }
    // console.log(obj); //{ '1': 10, '2': 11, '3': 12, '4': 13, '5': 14 }
    
    for(let i in obj){
        console.log(i+"-"+obj[i]);
    }
    
}
mapNumbers(5,10); 

// 1-10
// 2-11
// 3-12
// 4-13
// 5-14