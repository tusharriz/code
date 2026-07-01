// print the average of even numbers from 1 to 100 (both included)

{
    // 1. print the even numbers from 1 to 100;
    let i=1;
    while(i<=100){
        if(i%2==0){
            // console.log(i);
        }
        i++;
    }

}

{
    // 2. find out the formula of average;
    // average = sum/count;
}

{
    // 3. combine the both;

    let sum = 0;
    let count = 0;
    let i=1;
    while(i<=100){
        if(i%2==0){
            sum=sum+i;
            count=count+1;
        }
        i++;
    }
    let average = (sum/count);
    console.log(average);
}

