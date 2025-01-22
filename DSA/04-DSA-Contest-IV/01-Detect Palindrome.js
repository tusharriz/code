// Detect Palindrome

function detectPalindrome(num){
    //write code here
    
    let originalNum = num
    let reverse = 0;
    while(num > 0){
        reverse = (reverse*10) + (num%10);
        num = (Math.floor(num/10));
    }
    // console.log(reverse);
    
    if(originalNum == reverse){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
detectPalindrome(1221); // Yes