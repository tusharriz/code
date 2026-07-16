//Parameters in Object Method

let obj = {
    print : function(name,age){
        console.log("My name is",name,"and My age is",age+".");
    }
};

obj["print"]("Hari",25);

{
    let obj = {
        print : function(name,age){
            console.log("My name is" + " " + name + " " + "and I'm" + " " + age + " " + "year old." )
        }
    }
    obj["print"]("Shinchan",5);
}