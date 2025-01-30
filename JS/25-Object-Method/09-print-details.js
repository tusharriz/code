let obj = {
    firstName : "Neelkanth",
    lastname : "Varni",
    age : 13,
    print : function(){
        console.log("My name is",this.firstName,this.lastname+".");
    }

};

obj["print"]();