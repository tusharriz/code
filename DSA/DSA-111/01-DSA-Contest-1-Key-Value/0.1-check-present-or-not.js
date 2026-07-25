// given an obj print if the key is present or not.
// if present print "present" else print "absent";
// key = "money";

let obj = {
    name : "Nobita",
    class : 9,
    age : 17,
    city : "Tokyo"
}

let key = "money";

if(obj[key] == undefined){
    console.log("absent");
}else{
    console.log("present");
}