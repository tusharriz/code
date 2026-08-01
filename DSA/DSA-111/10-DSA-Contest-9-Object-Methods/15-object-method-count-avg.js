// Object Method: Count & Avg

let obj = {
    data: [27, 31, 42, 78, 62, 12, 34, 89, 51, 41, 31, 38, 40],

    countEven: function () {
        let arr = this.data;
        let count = 0;
        for(let i of arr){
            if(i%2==0){
                count++;
            }
        }
        console.log(count);
    },
};

obj["countEven"](); // 7