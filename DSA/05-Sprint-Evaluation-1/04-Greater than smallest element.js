// Greater than smallest element

function change(arr){
	//write your code here
	
	let min = Infinity;
	let bag = "";
	
	for(let i=0; i<=arr.length-1; i++){
	    if(arr[i] < min){
	        min = arr[i];
	    }
	}
// 	console.log(min);

    for(let j=0; j<=arr.length-1; j++){
        if(arr[j] == min){
            bag = bag + min + " ";
        }else{
            bag = bag + "-1" + " ";
        }
    }
    console.log(bag);

}
change([1,3,2]); // 1 -1 -1
change([3,2,2,1,1]); // -1 -1 -1 1 1