//print the first half of the array

{
    let arr = [1, 4, 5, 7, 8, 33, 88, 99];
    // output : [1, 4, 5, 7]

    for (let i = 0; i <= (arr.length / 2) - 1; i++) {
        // console.log(arr[i]);
    }
}

//print the second half of the array

{
    let arr = [1, 4, 5, 7, 8, 33, 88, 99];
    // output : [8, 33, 88, 99]

    for(let i=(arr.length/2); i<=arr.length-1; i++){
        // console.log(arr[i]);
    }

}

{
    // what if the length of array is odd
    // let arr = [1, 4, 5, 7, 8, 33, 88, 9, 55];
    //print the second half of the array
    // output : [33, 88, 9, 55]

    let arr = [1, 4, 5, 7, 8, 33, 88, 99, 100];
    // output : [33, 88, 99,100]

    for(let i=((arr.length+1)/2); i<=arr.length-1; i++){
        // console.log(arr[i]);
    }

    // if you want out like [8, 33, 88, 99, 100]
    let arr1 = [1, 4, 5, 7, 8, 33, 88, 99, 100];

    for(let i=((arr.length-1)/2); i<=arr.length-1; i++){
        // console.log(arr[i]);
    }

}


{
    // if you did not know the length of array;
    let arr = [1, 4, 5, 7, 8, 33, 88, 9, 55];

    let start = 0;

    if(arr.length%2==0){
        start = arr.length/2;
    }else{
        start = (arr.length+1)/2;
    }
    // console.log(start);

    for(let i=start; i<=arr.length-1; i++){
        // console.log(arr[i]);
    }

}
