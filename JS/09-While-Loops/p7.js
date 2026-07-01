// print the sum of all the multiples of 3 from 0 to the given limit;

let sum = 0;
let limit = 20;

let i=0;
while(i<=limit){
    if(i%3==0){
        sum=sum+i;
        // console.log(sum);
    }
    i++;
}
console.log(sum);