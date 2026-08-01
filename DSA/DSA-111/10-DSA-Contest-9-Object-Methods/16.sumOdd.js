// Given data array, find the sum of odd number present in the data array


let obj = {
    data: [27, 31, 42, 78, 62, 12, 34, 89, 51, 41, 31, 38, 40],

    sumOdd: function () {
        let arr = this.data;
        let sum = 0;
        for(let i of arr){
            if(i%2!==0){
                sum += i;
            }
        }
        console.log(sum);
    },
};

obj["sumOdd"](); // 270