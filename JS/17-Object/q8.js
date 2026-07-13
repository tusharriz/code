// let arr=[7,2,7,3,4,4,2];

// let obj={};
// for (let i=0;i<=arr.length-1;i++){
//   let elem=arr[i];
//   if(obj[elem]==undefined){
//     obj[elem]=1;
//   } else {
//     obj[elem]++;
//   }
// }

// let bag = "";
// for(let i in obj){
//     bag=bag+i+"-"+obj[i]+" ";
// }
// console.log(bag);

let arr1 = [1,2,3,4,5];
let nstr = [];

for(let i=arr1.length-1; i>=0; i--){
    // console.log(arr1[i]);
    nstr.push(arr1[i]);
}
console.log(nstr);