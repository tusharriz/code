// Distinct Elements in an Array

function distinctElements(n, arr){
	//Write your code here
	let obj = {};
	
	for(let i=0; i<=n-1; i++){
	    if(obj[arr[i]] === undefined){
	        obj[arr[i]] = 1;
	    }else{
	        obj[arr[i]]++;
	    }
	}
// 	console.log(obj); //{ '1': 2, '2': 1, '3': 1, '5': 2, '6': 2 }
	
	let count = 0;
	for(let i in obj){
	    if(obj[i] === 1){
	        count++;
	    }
	}
	console.log(count);

}

distinctElements(8,[1, 1, 5, 2, 6, 6, 3, 5]); // 2

