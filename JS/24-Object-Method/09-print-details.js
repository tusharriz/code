let obj = {
    firstName : "Neelkanth",
    lastname : "Varni",
    age : 13,
    print : function(){
        console.log("My name is",this.firstName,this.lastname+".");
    }

};

obj["print"]();


let details = {
    name : "Ram",
    age : 34,
    hobbies : ["Coding","biking"],
    print: function(){
        console.log("Hello " + this.name); // Hello Ram
        console.log("Age is " + this.age); // Age is 34

        let arr = this.hobbies;
        // console.log(arr); // [ 'coding', 'biking' ]

        let bag = "";
        for(let i=0; i<=arr.length-1; i++){
            if(i==arr.length-1){
                bag = bag + arr[i] + ".";
            }else{
                bag = bag + arr[i] + ", "; 
            }
        }
        // console.log(bag); // coding, biking.

        console.log("Hobbies are " + bag); // Hobbies are coding, biking.

        // OR
        let bag1 = "";
        for(let i=0; i<=arr.length-1; i++){
            if(i==arr.length-1){
                bag1 = bag1 + "Running.";
            }else{
                bag1 = bag1 + arr[i] + ", "; 
            }
        }
        // console.log(bag); // coding, biking.

        console.log("Hobbies are " + bag1); // Hobbies are coding, Running.
    }
}

details["print"]();