// Write a custom function that has the same behavior of inbuilt Array Join Function

// const elements = ['Fire', 'Air', 'Water'];
// Expected output: "Fire,Air,Water"
// Expected output: "FireAirWater"
// Expected output: "Fire-Air-Water"

function addSeprator(arr,seperator){
    let nstr= "";

    if(arr.length === 0){
        nstr = nstr + "''";
    }else{
        if(seperator === undefined){
            seperator = ","
        }
    
        for(let i=0; i<=arr.length-1; i++){
            if(i===arr.length-1){
                nstr += arr[i];
            }else{
                nstr += arr[i] + seperator;
            }
        }
    }
    return nstr;
}

console.log(addSeprator(['Fire'])); // Fire
console.log(addSeprator(['Fire', 'Air', 'Water'])); // "Fire,Air,Water"
console.log(addSeprator(['Fire', 'Air', 'Water'],"")); // "FireAirWater"
console.log(addSeprator(['Fire', 'Air', 'Water'],"-")); // "Fire-Air-Water"
console.log(addSeprator([])); // "Fire-Air-Water"

