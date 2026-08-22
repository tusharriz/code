// given a str, count the number of substring that start with the letter "k" and str is "hacker"

function countSubstring(str,letter){
    let scount = 0;
    for(let i=0; i<=str.length-1; i++){
        let bag = "";
        for(let j=i; j<=str.length-1; j++){
            bag+=str[j];
            if(bag[0]===letter){
                scount++;
            }
        }
    }
    console.log(scount);
}
countSubstring("hacker","k"); // 3