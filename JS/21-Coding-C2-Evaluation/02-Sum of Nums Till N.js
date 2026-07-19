// Sum of Nums Till N

function sumTillN(N){
	//write your code here
	let sum = 0;
	for(let i=1; i<=N; i++){
	    sum = sum + i*5;
	}
	console.log(sum);
}
sumTillN(2); // 15