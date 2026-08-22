// given a str, count the number of substring that end with the letter "k" and str is "hacker"

function countEndSubstring(str,letter){
    let count = 0;
    for(let i=0; i<=str.length-1; i++){
        let bag = "";
        for(j=i; j<=str.length-1; j++){
            bag += str[j];
            if(bag[bag.length-1] == letter){
                count++;
            }
        }
    }
    console.log(count);
}
countEndSubstring("hacker","k"); // 4