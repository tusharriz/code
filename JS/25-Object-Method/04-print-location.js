//create an object method to print your location, and you have to use return statement;

let obj = {
    name : "Hari",
    age : 25,
    location : function(){
        return "INDIA";
    }
};

console.log(obj["location"]());
