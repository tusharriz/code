let num = 4569;
//Expected Output : 9654

let reverseNum = 0;
while(num>0){
    reverseNum = (reverseNum*10)+(num%10);
    num=(Math.floor(num/10));
}
console.log(reverseNum); //9654