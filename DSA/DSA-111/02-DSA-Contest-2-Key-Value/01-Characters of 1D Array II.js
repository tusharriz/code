// Characters of 1D Array II

function char1DArray(N, str){
	//Write your code here
	
	let at = "@";
	let per = "%";
	let and = "&";
	let hash = "#";
	let up = "^";
	
	let bag = "";
	
	for(let i=0; i<=N-1; i++){
	    if(str[i] === at){
	        bag += 0;
	    }else if(str[i] === per){
	        bag += 1;
	    }else if(str[i] === and){
	        bag += 2;
	    }else if(str[i] === hash){
	        bag += 3;
	    }else if(str[i] === up){
	        bag += 4;
	    }
	}
	console.log(bag);
}
char1DArray(5, "@%&#^"); // 01234


let str = "%&^@";

let obj = {
	"@" : 3,
	"%" : 1,
	"&" : 2,
	"#" : 0,
	"^" : 4
}

let bag = "";
for(let i=0; i<=str.length-1; i++){
	console.log(obj[str[i]])
	bag = bag + obj[str[i]]
}
console.log(bag);

