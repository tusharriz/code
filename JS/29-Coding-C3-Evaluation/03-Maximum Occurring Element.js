// Maximum Occurring Element

function maximumOccuringElement(A,N){
    //write code here
    
    let obj = {};
    
    for(let i=0; i<=N-1; i++){
        if(obj[A[i]] === undefined){
            obj[A[i]] = 1;
        }else{
            obj[A[i]]++;
        }
    }
    // console.log(obj); // { '0': 2, '2': 1, '6': 1, '9': 1 }
    
    let max = -Infinity;
    let index = 0;
    
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key];
            index =  key;
            
        }
    }
    // console.log(max); // 2
    console.log(index); // 0
}
maximumOccuringElement([0,2,0,6,9],5); // 0