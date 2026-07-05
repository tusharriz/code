// peint hollow opposite U & take cake of the spaces

// output:

// * * * * *
// *       *
// *       *
// *       *
// *       *

// let N=5;
// for(let i=1; i<=N; i++){
//   let bag = "";
//   if(i==1){
//     for(let j=1; j<=N; j++){
//       if(j==N){
//         bag = bag + "*";
//       }
//       else{
//         bag = bag + "*" + " ";
//       }
//     }
//   }else{
//     for(let j=1; j<=N; j++){
//       if(j==1 || j==N){
//         if(j==N){
//           bag = bag + "*";
//         }
//         else{
//           bag = bag + "*" + " ";
//         }
//       }
//       else{
//         bag = bag + "  ";
//       }
//     }
//   }
//   console.log(bag);
// }

{
    let N=5;
  for(let i=N; i>=1; i--){
    let bag = "";
    if(i==N){
        for(let j=1; j<=N; j++){
            if(j==N){
                bag = bag + "*";
            }else if(j==1){
                bag = bag + "*" + " ";
            }else{
                bag = bag + "-";
            }
        }
    }
    else{

    }
    console.log(bag);
  }
}
