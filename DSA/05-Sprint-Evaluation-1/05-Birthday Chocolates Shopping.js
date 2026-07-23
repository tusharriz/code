// Birthday Chocolates Shopping

function party(N,M){
	// write your code here
	
	if(5*M <= N){
	    console.log("Dairy Milk");
	}else if(2*M <= N){
	    console.log("Shots");
	}else if(1*M <= N){
	    console.log("Eclairs");
	}else{
	    console.log("No Chocolates");
	}
}
party(100,15); // Dairy Milk
party(10,15); // No Chocolates