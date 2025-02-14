let str = "dangerouscovid";
let count1 = 0;

for(let i=0; i<=str.length-1; i++){
    let bag = "";
    for(let j=i; j<=str.length-1; j++){
        bag = bag + str[j]
        // console.log(bag);

        let obj = {a:0,e:0,i:0,o:0,u:0};
        let count = 0;

        for(let i=0; i<=bag.length-1; i++){
            let char = bag[i];
            if(obj[char] === 0){
                obj[char] = 1;
                count++;
            }
        }
        
        if(count === 5){
            count1++;
        }
        
    }
}
console.log(count1); // 4
