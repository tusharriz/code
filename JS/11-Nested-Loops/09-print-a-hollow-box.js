// Print a box patterns using *

`
output

**********
*        *
*        *
*        *
*        *
*        *
*        *
*        *
*        *
**********`


// i = 1  => j = 1 to 10 * print

// i = 2 
//  to    => j = 1 and 10 * print
// i = 9

// i = 10 => j = 1 to 10 * print 


for(let i=1; i<=10; i++){
    let bag = "";
    if(i==1 || i==10){
        for(let j=1; j<=10; j++){
            bag = bag + "*";
        }
        console.log(bag);
    } 
    else{
        for(let j=1; j<=10; j++){
            if(j==1 || j==10){
                bag = bag + "*";
            }else{
                bag = bag + " ";
            }
        }
        console.log(bag);
    }
    
}

`
**********
*        *
*        *
*        *
*        *
*        *
*        *
*        *
*        *
**********
`

//OR

for(let i=1; i<=10; i++){
    let bag = "";
    for(let j=1; j<=10; j++){
        if(i==1 || i==10){
            bag = bag + "*";
        }else{
            if(j==1 || j==10){
                bag = bag + "*";
            }else{
                bag = bag + " ";
            }
        }
    }
    console.log(bag);
}

`
**********
*        *
*        *
*        *
*        *
*        *
*        *
*        *
*        *
**********
`



{
    let N = 3;
    for(let i=1; i<=N; i++){
      let bag = "";
      if(i==N){
        for(let j=1; j<=N; j++){
          if(j==N){
            bag = bag + "*";
          }
          else{
            bag = bag + "*" + " ";
          }
        }
        
      }
      else{
        for(let j=1; j<=N; j++){
          if(j==1){
            bag = bag +"*" + " ";
          }else if(j==N){
            bag = bag + "*";
          }else{
            bag = bag + "  ";
          }
        }
      }
      console.log(bag);
    }
}