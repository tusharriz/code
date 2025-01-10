let i=1;

while(i<=10){
    console.log(i);
    i++;
    if(i==4){
        console.log("Skipped");
        continue;
    }
}

// output:-
// 1
// 2
// 3
// Skipped
// 4
// 5
// 6
// 7
// 8
// 9
// 10