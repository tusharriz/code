// create an object method to add two numbers

let obj = {
    add : function(a,b){
        return a+b;
    }
};
console.log(obj["add"](4,2));
// OR
let sum = obj["add"](5,6);
console.log(sum);



{
    let obj = {
        sumNum : function(num1, num2){
            return num1 + num2;
        }
    }

    let ans = obj["sumNum"](15,16);
    console.log(ans);
}