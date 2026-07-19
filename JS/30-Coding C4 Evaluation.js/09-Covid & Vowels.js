let str = "masaieou";
let count1 = 0;

for (let i = 0; i <= str.length - 1; i++) {
    let bag = "";
    for (let j = i; j <= str.length - 1; j++) {
        bag = bag + str[j]
        // console.log(bag);

        let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
        let count = 0;

        for (let i = 0; i <= bag.length - 1; i++) {
            let char = bag[i];
            if (obj[char] === 0) {
                obj[char] = 1;
                count++;
            }
        }

        if (count === 5) {
            count1++;
        }

    }
}
// console.log(count1); // 4

{
    function vowelStr(str) {
        let vowel = "aeiou";
        let obj = {};
        if (str.length >= vowel.length) {
            for (let i = 0; i <= str.length - 1; i++) {
                for (let j = 0; j <= vowel.length - 1; j++) {
                    if (str[i] == vowel[j]) {
                        obj[str[i]] = 1;
                        break;
                    }
                }
            }
            // console.log(obj); //{ a: 1, i: 1 }

            let count = 0;
            for (let key in obj) {
                count++;
            }
            // console.log(count);
            if (count == 5) {
                return str;
            }
        }
    }
// console.log(vowelStr("masaieou"));

    function substringGen(string){
        let arr = [];
        for (let i = 0; i <= string.length-1; i++) {
            let bag = "";
            for (let j = i; j <= string.length-1; j++) {
                bag += string[j];
                arr.push(bag);
            }
        }
        return arr;
    }
    let narr = (substringGen("dangerouscovid"));
    // console.log(narr);

    let stringsCount = 0;
    for(let i=0; i<=narr.length-1; i++){
        let result = vowelStr(narr[i]);
        if(result != undefined){
            console.log(result);
            stringsCount++;
        }
        // console.log(narr[i]);
    }
    console.log(stringsCount); // 4
}
