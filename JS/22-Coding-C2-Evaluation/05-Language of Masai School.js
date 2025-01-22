// Language of Masai School

function languageOfMasaiSchool(str){
	//Write your code here
	let vowel = "aeiou";
	let consonant = "bcdfghjklmnpqrstvwxyz";
	
	for(let i=0; i<=vowel.length-1; i++){
	    if(str[0] == vowel[i]){
	        console.log("masai"+str);
	        break;
	    }
	}
	
	for(let j=0; j<=consonant.length-1; j++){
	    if(str[0] == consonant[j]){
	        console.log(str+"school");
	        break;
	    }
	}
}

languageOfMasaiSchool("abc"); // masaiabc