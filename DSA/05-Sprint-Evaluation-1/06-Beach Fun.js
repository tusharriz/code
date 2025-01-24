// Beach Fun

function beachFun(N){
	//write your code here
	
	let x = N;
	
	if((x-1) < (49-x)){
	    console.log("RK Beach");
	}else if((x-1) > (49-x)){
	    console.log("RU Beach");
	}else{
	    console.log("Go Anywhere!");
	}
}
beachFun(23); // RK Beach
beachFun(29); // RU Beach
