// Uppercase-Lowercase

// Given information in a data i.e contain the keys as name, toUpperCase 
// and toLowercase.
// toUpperCase : function to print the uppercase of the given name
// toLowerCase : function to print the lowercase of the given name

// data = {
// 	name : "Suraj Lal Singh",
// 	toUpperCase : function(){

// 	},
// 	toLowerCase : function(){

// 	}
// }

// Sample Output :
// data.toUpperCase() give output "SURAJ LAL SINGH"
// data.toLowerCase() give output "suraj lal singh"

let data = {
    name: "Suraj Lal Singh",

    toUpperCase: function () {

        let ubag = "";
        let str = this.name;
        let lower = "abcdefghijklmnopqrstuvwxyz";
        let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (let i = 0; i <= str.length - 1; i++) {

            for (let j = 0; j <= lower.length - 1; j++) {

                if (str[i] === lower[j] || str[i] === upper[j]) {
                    ubag += upper[j];
                    break;
                }

                if (str[i] === " ") {
                    ubag += " "
                    break;
                }

            }
        }
        console.log(ubag);
    },

    toLowerCase: function () {

        let lbag = "";
        let str = this.name;
        let lower = "abcdefghijklmnopqrstuvwxyz";
        let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (let i = 0; i <= str.length - 1; i++) {

            for (let j = 0; j <= upper.length - 1; j++) {

                if (str[i] === upper[j] || str[i] === lower[j]) {
                    lbag += lower[j];
                    break;
                }

                if (str[i] === " ") {
                    lbag += " "
                    break;
                }

            }
        }
        console.log(lbag);

    }
}

// data["toUpperCase"](); // SURAJ LAL SINGH
// data["toLowerCase"](); // suraj lal singh

{

let data = {
name: "Suraj Lal Singh",
toUpperCase: function () {
    let upper = this.name;
    let lowerChar = "abcdefghijklmnopqrstuvwxyz";
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let bag = "";
    for(let i=0; i<=upper.length-1; i++){
        // console.log(upper[i]);
        let char = upper[i];
        let flag = false;
        for(let j=0; j<=lowerChar.length-1; j++){
            if(char == lowerChar[j]){
                bag += upperChar[j];
                flag = true;
                break;
            }
        }
        if(flag == false){
            bag += upper[i];
        }
    }
    console.log(bag);
},

toLowerCase: function () {
    let str = this.name;
    let lowerChar = "abcdefghijklmnopqrstuvwxyz";
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let bag = "";
    for(let i=0; i<=str.length-1; i++){
        let char = str[i];
        let flag = false;
        for(let j=0; j<=upperChar.length-1; j++){
            if(char == upperChar[j]){
                bag += lowerChar[j];
                flag = true;
                break;
            }
        }
        if(flag == false){
            bag += str[i];
        }
    }
    console.log(bag);
}
}

data["toUpperCase"](); // SURAJ LAL SINGH
data["toLowerCase"](); // suraj lal singh

}