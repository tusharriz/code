let arr = [1, 4, 6, 5, 3, 7, 2];

{
    //print the maximum element

    let max = -Infinity;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // console.log(max);
}


{
    //print the min element

    let min = Infinity;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // console.log(min);
}
