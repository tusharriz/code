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
