// Intersection of Array

function intersectionOfArray(arr1, arr2){
    //write code here
    
    let common = "";
    
    for(let i=0; i<=arr1.length-1; i++){
        
        for(let j=0; j<=arr2.length-1; j++){
            
            if(arr1[i] == arr2[j]){
                common = common + arr1[i];
            }
        }
    }
    console.log(common);
}

intersectionOfArray([4,5,7],[9,2,5]) // 5