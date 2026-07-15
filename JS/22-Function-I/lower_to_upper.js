{ 
 // convert lower char into upper char.
 // input : "t"
 // output : "T";


    let char = "t";
    let newChar = "";

    let smallChar = "abcdefghijklmnopqrstuvwxyz";
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i <= smallChar.length - 1; i++) {
        if (char == smallChar[i]) {
            newChar = newChar + upperChar[i];
            break;
        }
        // console.log(smallChar[i])
    }
    // console.log(newChar); // T

}

{
    // convert lower char into upper char. if not find the upper char then print the lower char only.

    // input : "t"
    // output : "T"; if not find upper "T", then... 
    // output is "t".

    let char = "t";
    let newChar = "";

    let smallChar = "abcdefghijklmnopqrstuvwxyz";
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0; i<=smallChar.length-1; i++){
        let flag = 0;
        if(flag==1){
            break;
        }
        else{
            if(char==smallChar[i]){
                newChar=newChar+upperChar[i];
                flag=1;
                break;
            }
        }
        
        // console.log(newChar+char);
    }
    


}

{
    // convert only upper char to lower char in string and add into new variable.
    // input : Run
    // output : run

    let str = "Bun";
    let newStr = "";

    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";

    for(let i=0; i<=str.length-1; i++){
        // console.log(str[i]);
        let char = str[i];
        // console.log(char);

        for(let j=0; j<=upper.length-1; j++){
            // console.log(upperChar[j]);
            let up = upper[j];
            // console.log(up);

            if(char==up){
                newStr=newStr+lower[j];
            }else{
                if(char==lower[j]){
                 newStr=newStr+lower[j];
                }
            }
        }
    }
    console.log(newStr);
}