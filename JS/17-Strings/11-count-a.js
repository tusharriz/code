//count the names that contain atleast 1 "A"

let names=["AMIT", "NRUPUL", "AMAN", "VARUN"];

let count = 0;

for(let i=0; i<=names.length-1; i++){
      //AMIT         0
    let word = names[i];

    for(let j=0; j<=word.length-1; j++){
        if(word[j] == "A"){
            count++;
            break;
        }
    }

}
console.log(count); // 3