let data = ["radha", "ram", "suraj", "pankaj", "dinesh"];
let arr = [];

for(let i=0; i<=data.length-1; i++){
    // console.log(data[i]);
    
    let str = data[i]; // "radha"
    let rstr = "";

    for(let j=str.length-1; j>=0; j--){
        rstr += str[j];
    }
    arr.push(rstr);

}
// console.log(arr); //[ 'ahdar', 'mar', 'jarus', 'jaknap', 'hsenid' ]

let nstr = "";

for(let i=0; i<=arr.length-1; i++){
    nstr += arr[i] + " ";
}
// console.log(nstr); // ahdar mar jarus jaknap hsenid  


{
let obj = {
    data: ["radha", "ram", "suraj", "pankaj", "dinesh"],

    reverseArrayStrings: function() {
        let arr = this.data;
        
        let bag = ""
        for(let i=0; i<=arr.length-1; i++){
            let str = arr[i];
            for(let j=str.length-1; j>=0; j--){
                // console.log(str[i]);
                bag += str[j];
            }
            bag += " ";
        }
        console.log(bag);
    }
}
    obj["reverseArrayStrings"](); // ahdar mar jarus jaknap hsenid
}