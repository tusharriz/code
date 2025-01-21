function equalTo42(arr) {
    //write code here
    let flag = false;
    
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i] == 42){
            flag = true;
            break;
        }
    }
    
    if(flag === true){
        console.log("Yes");
    }else{
        console.log("No");
    }
}

equalTo42([3,7,0,9,8]); // No