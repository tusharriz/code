// Even Sum Again

function evenSumAgain(num) {
    // Write code here
    let sum = 0;
    for(let i=1; i<=num; i++){
        if(i%2===0){
            sum = sum + i;
        }
        console.log(sum);
    }
}
evenSumAgain(4);

// 0
// 2
// 2
// 6