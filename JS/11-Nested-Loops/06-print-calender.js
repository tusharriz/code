// Problem 1: Print the Calendar date in the below format
`
1-1
2-1
3-1
.
.
.
.
.
31-1
.
.
.
.
.
31-12
`

for(let i=1; i<=12; i++){
    // console.log(i);
    let days = 31;
    if(i==4 || i==6 || i==9 || i==11){
        days = 30;
    }else if(i==2){
        days = 28;
    }
    for(let j=1; j<=days; j++){
        console.log(j+"-"+i);
    }
}

