let arr = [1, 4, 6, 5, 3, 7, 2];

{
    //print the second maximum element

    let max = -Infinity;
    let secondmax = -Infinity;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            secondmax = max;
            max = arr[i];
        }
    }

    console.log(secondmax);
}
