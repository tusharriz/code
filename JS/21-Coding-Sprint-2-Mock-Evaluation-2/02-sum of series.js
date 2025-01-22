// sum of series

function sumOfSeries(N, X) {
    // Write code here

    if(N<=0 || X<=0){
        console.log("-1");
    }else{
        let sum = 0;
        for(let i=0; i<N; i++){
            sum=sum+X**i;
        }
        console.log(sum);
    }
}
sumOfSeries(3, 2); // 7
