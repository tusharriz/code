// Write a custom function that has the same behavior of inbuilt String Substring Function

const str = 'Mozilla';

// console.log(str.substring(1, 3));
// Expected output: "oz"

// console.log(str.substring(2));
// Expected output: "zilla"


function customSubstring(str,start,end){

    if(end ===undefined){
        end = str.length;
    } 

    if(end <= 0){
        start = 0;
        end = 1
    }

    if(end>str.length){
        end = str.length
    }

    if(start == str.length){
        start = end;
        end = str.length;
    }

    let nstr = "";
    for(let i=start; i<end; i++){
        nstr = nstr + str[i];
    }
    return nstr;
}

console.log(customSubstring("Mozilla",1,3)); //oz
console.log(customSubstring("Mozilla",2)); // zilla
console.log(customSubstring("Mozilla",0,1)); // M
console.log(customSubstring("Mozilla",1,0)); // M
console.log(customSubstring("Mozilla",0,6)); // Mozill
console.log(customSubstring("Mozilla",0,7)); // Mozilla
console.log(customSubstring("Mozilla",0,10)); // Mozilla
console.log(customSubstring("Mozilla",7,4)); // lla
console.log(customSubstring("Mozilla",4)); // lla


let text = "Mozilla";
console.log(customSubstring(text,text.length-4)); //illa
console.log(customSubstring(text,text.length-5)); //zilla