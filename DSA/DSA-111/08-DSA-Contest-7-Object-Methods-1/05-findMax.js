// let obj = {
//     names : ["Ram", "Shayam", "Lakhan", "Aman"],
//     strength : [ 90,58,21,96],
//     iq : [75,15,38,78],

//     findMaxStrength : function(){

//         let arrStr = this.strength;
//         let maxStrength = -Infinity;
//         let name = "";


//         for(let i=0; i<=arrStr.length-1; i++){
//             if(arrStr[i] > maxStrength){
//                 maxStrength = arrStr[i];
//                 name = this.names[i]
//             }

//         }
//         return name + " " +maxStrength;

//     },

//     findMaxIq : function(){

//         let arriq = this.iq;
//         let iq = -Infinity;
//         let name = "";


//         for(let i=0; i<=arriq.length-1; i++){
//             if(arriq[i] > iq){
//                 iq = arriq[i];
//                 name = this.names[i]
//             }

//         }
//         return name + " " +iq;

//     }

// }

// console.log(obj["findMaxStrength"]());
// console.log(obj["findMaxIq"]());

// OR

let obj = {
    names: ["Ram", "Shayam", "Lakhan", "Aman"],
    strength: [90, 58, 21, 96],
    iq: [75, 15, 38, 78],

    findMaxStrength : function (){
        let arr = this.strength;
        let max = -Infinity;
        let ans;
        for(let i=0; i<=arr.length-1; i++){
            if(arr[i] > max){
                max = arr[i];
                ans = this.names[i];
            }
        }
        return ans;
    },

    findMaxIq : function (){
        let arr = this.iq;
        let max = -Infinity;
        let ans;
        for(let i=0; i<=arr.length-1; i++){
            if(arr[i] > max){
                max = arr[i];
                ans = this.names[i]
            }
        }
        return ans;
    }
}

console.log(obj["findMaxStrength"]());
console.log(obj["findMaxIq"]());
