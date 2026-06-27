`You are given two integers, stored in the variable with the following names
L, W
Also, you are given another two integers, stored in the variable with the following names
length & width
-If the value stored in length is greater than the value stored in L and the value stored in width, is greater than the value stored in W, print Upload
-Else If the value stored in length is less than the value stored in L, print Increase Length
-Else if the value stored in width, is less than the value stored in W, print Increase Width`

let l = 12;
let w = 14;
let length = 8;
let width = 19;

if(length > l && width > w){
    console.log("Upload");
}else if(length < l){
    console.log("Increase Length"); // Increase Length
}else if(width < w){
    console.log("Increase Width");
}