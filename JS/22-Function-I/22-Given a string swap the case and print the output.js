// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

function swapCase(str){
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let nstr = "";

    for(let i=0; i<=str.length-1; i++){
        for(let j=0; j<=lower.length-1; j++){
            if(str[i] == lower[j]){
                nstr += upper[j];
                break;
            }else if(str[i] == upper[j]){
                nstr += lower[j];
                break;
            }
        }
    }
    return nstr;
}
console.log(swapCase("Test")); // tEST
console.log(swapCase("jJFVhgfs")); // JjfvHGFS

{
    function charSwapping(str){
        let nstr = "";

        let lowerChar = "abcdefghijklmnopqrstuvwxyz";
        let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for(let i=0; i<=str.length-1; i++){
            let char = str[i];

            for(let j=0; j<=lowerChar.length-1; j++){
                if(char == lowerChar[j]){
                    nstr = nstr + upperChar[j];
                    break;
                }else if(char == upperChar[j]){
                    nstr = nstr + lowerChar[j];
                    break;
                }
            }
        }
        return nstr; 
    }
    console.log(charSwapping("TuShaR"));
}