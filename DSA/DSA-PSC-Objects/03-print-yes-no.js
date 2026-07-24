//given an obj and key, check if the key is present in the object
// print yes or no
// solve this without using any loop

let friend = {
    name : "Nobita",
    time : true,
    house : true
}

let key = "money";

if(friend[key] == undefined){
    console.log("No"); // No
}else{
    console.log("Yes");
}