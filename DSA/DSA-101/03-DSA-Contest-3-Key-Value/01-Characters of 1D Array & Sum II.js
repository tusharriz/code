// Characters of 1D Array & Sum II

function char1DArraySum(N, str){
	//Write your code here
	let at = "@";
	let per = "%";
	let and = "&";
	let hash = "#";
	let up = "^";
	
	let sum = 0;
	
	for(let i=0; i<=N-1; i++){
	    if(str[i] === at){
	        sum += 0;
	    }else if(str[i] === per){
	        sum += 1;
	    }else if(str[i] === and){
	        sum += 2;
	    }else if (str[i] === hash){
	        sum += 3;
	    }else if(str[i] === up){
	        sum += 4;
	    }
	}
	console.log(sum);
	
}
char1DArraySum(5, "@%&#^"); // 10