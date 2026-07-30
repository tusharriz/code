// Uppercase-Lowercase

// -Given information in a data i.e contain the keys as name, toUpperCase 
// and toLowercase.

// -toUpperCase : function to print the uppercase of the given name
// -toLowerCase : function to print the lowercase of the given name

// data = {
//     name : "Suraj Lal Singh",
//     toUpperCase : function(){

//     },
//     toLowerCase : function(){

//     }
// }

// Sample Output :
// data.toUpperCase() give output "SURAJ LAL SINGH"
// data.toLowerCase() give output "suraj lal singh"


let data = {

    name : "Suraj Lal Singh",

    toUpperCase : function(){

        let str = this.name;
        let lower = "abcdefghijklmnopqrstuvwxyz";
        let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let upperbag = "";

        for(let i=0; i<=str.length-1; i++){
            
            for(let j=0; j<=lower.length-1; j++){

                if(str[i] === lower[j] || str[i] === upper[j]){
                    upperbag += upper[j];
                    break;
                }

                if(str[i] === " "){
                    upperbag += " ";
                    break;
                }

            }
        }

        console.log(upperbag);

    },

    toLowerCase : function(){

        let str = this.name;
        let lower = "abcdefghijklmnopqrstuvwxyz";
        let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let lowerbag = "";

        for(let i=0; i<=str.length-1; i++){
            
            for(let j=0; j<=upper.length-1; j++){

                if(str[i] === upper[j] || str[i] === lower[j]){
                    lowerbag += lower[j];
                    break;
                }

                if(str[i] === " "){
                    lowerbag += " ";
                    break;
                }

            }
        }

        console.log(lowerbag);

    }
}

data["toUpperCase"]();
data["toLowerCase"]();