// You are given an integer X. You need to print “Divisible by 6” if it's divisible by 6, else, print “Divisible by 5” if it's divisible by 5, else, print “Divisible by 3” if it's divisible by 3, if the number is not divisible by any of the numbers mentioned, print “404 Not Found”. (Only one answer should be printed)

// X=25, X=18, X=9. (If a number is divisible by more than 1 number print the first one, ex: for 18 print "Divisible by 6")


{
    let x = 25;

    if (x % 6 === 0) {
        console.log("Divisible by 6");
    } else if (x % 5 === 0) {
        console.log("Divisible by 5");
    } else if (x % 3 === 0) {
        console.log("Divisible by 3");
    } else {
        console.log("404 Not Found");
    }
}

{
    let x = 18;

    if (x % 6 === 0) {
        console.log("Divisible by 6");
    } else if (x % 5 === 0) {
        console.log("Divisible by 5");
    } else if (x % 3 === 0) {
        console.log("Divisible by 3");
    } else {
        console.log("404 Not Found");
    }
}


{
    let x = 9;

    if (x % 6 === 0) {
        console.log("Divisible by 6");
    } else if (x % 5 === 0) {
        console.log("Divisible by 5");
    } else if (x % 3 === 0) {
        console.log("Divisible by 3");
    } else {
        console.log("404 Not Found");
    }
}