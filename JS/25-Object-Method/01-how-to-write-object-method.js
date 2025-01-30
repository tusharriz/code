{
    //first, what's the syntax of a function;
    function name() {
        console.log("Om");
    }

    // name(); // function calling
}

{
    // syntax of object method;
    let obj = {
        name : "Hari Om",
        age : 24,
        print : function () {
            console.log("Hari Om");
        }
    };

    // console.log(obj);

    // how to access any key inside the object;
    // console.log(obj["a"]);

    // how to call the function :-
    // console.log(obj["print"]()) // Wrong Way,it give output but it gives unefined also. 
    // if I do this then. They give my output but they also giving me undefined because of "console.log". Remove the "console.log" for calling the function.

    obj["print"](); // right way
    
}
