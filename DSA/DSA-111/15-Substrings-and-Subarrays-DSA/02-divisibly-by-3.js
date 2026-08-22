// given a str of length N, where N is perfectly divisible by 3. Break the str down in 3 parts, p1, p2, p3 and return p3+p2+p1;

// e.g.  "aabbcc" => "ccbbaa"
// e.g.  "abcxyz" => "yzcxab"

function breakStr(str,N){
    let p1="",p2="",p3="";
    for(let i=0; i<N/3; i++){
        p1 += str[i];
    }
    // console.log(p1);
    
    for(let i=N/3; i<2*(N/3); i++){
        p2 += str[i];
    }
    // console.log(p2);
    
    for (let i = 2 * (N / 3); i<N; i++){
        p3 += str[i];
    }
    // console.log(p3);
    console.log(p3+p2+p1)
}
breakStr("education", 9); // ioncatedu