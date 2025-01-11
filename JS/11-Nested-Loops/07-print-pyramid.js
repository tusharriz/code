`
output
   *  
  ***
 ***** 
`
let n = 4;
for(let i=1; i<=3; i++){
    let bag = ""
    for(let k=n-i; k>=0;k--){
        bag = bag + " ";
    }
    for(j=1; j<=(2*i-1); j++){
        bag = bag + "*";
    }
    console.log(bag);
}

`  
  *
 ***
*****
`

{ // for visual perpous adding 0 insted of space
    let n = 4;
    for(let i=1; i<=3; i++){
    let bag = ""
    for(let k=n-i; k>=0;k--){
        bag = bag + "0";
    }
    for(j=1; j<=(2*i-1); j++){
        bag = bag + "*";
    }
    console.log(bag);
    }
}

`
0000*
000***
00*****
`