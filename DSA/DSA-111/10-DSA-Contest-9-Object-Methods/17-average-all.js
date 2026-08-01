// Find the average of all the numbers present in data array

let obj = {
    data: [27, 31, 42, 78, 62, 12, 34, 89, 51, 41, 31, 38, 40],

    average: function () {
        let arr = this.data;
        let sum = 0;
        for(let i of arr){
            sum += i;
        }
        // console.log(sum); // 576
        let average = Math.ceil(sum/arr.length);
        console.log(average);
    },
};

obj["average"](); // 44