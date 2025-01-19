// Masai School! Hurray!

function masaiSchoolHurray(N) {
    // Write code here
    for(let i=1; i<=N; i++){
        if(i%5===0 && i%7===0){
            console.log("Masai School");
        }else if(i%7===0){
            console.log("Masai");
        }else if(i%5===0){
            console.log("School");
        }else{
            console.log("Hurray!");
        }
    }
}

masaiSchoolHurray(7);

// Hurray!
// Hurray!
// Hurray!
// Hurray!
// School
// Hurray!
// Masai