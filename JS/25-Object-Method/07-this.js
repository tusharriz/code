//create an object method to print the details presnt inside the object method;

let obj = {
    fname : "Kalki",
    age : 25,
    location : "bhart",
    print : function(){
        console.log(this.fname);
        console.log(this.age);
        console.log(this.location);

        //OR

        // console.log(obj["fname"]); WRONG WAY!! this line is also gives the same output but this is the wrong way to access the data.
        
    }

};

obj["print"]();

//while accessing the data present inside the same object i will use a magic word "this".

