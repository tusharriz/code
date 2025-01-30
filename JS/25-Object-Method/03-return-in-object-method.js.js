// use of return;

// In function, how to declare return;
{
    function print(){
        return 10+20;
    }
    // console.log(print());
    // OR
    let result = print();
    console.log(result);

}

// In object Methods, how to declare return;

{
    let details = {
        name : "Kalki",
        age : 26,
        print : function(){
            return 10+20;
        }
    };
    
    console.log(details["print"]());
    // OR
    let result = details["print"]();
    console.log(result);

    // here I write the "console.log" for calling the function because now, in function (in line no. 5) I return something to the "console.log"

}
