//create an object with following details
//name: Ram
//age:34
//hobbies:["coding","biking"]
//print: function(){print all the details}

{
    // without inbult method;
    let obj = {
        name: "Ram",
        age: 34,
        hobbies: ["coding", "biking"],
        print: function () {
            console.log("Hello", this.name);
            console.log("Age is", this.age);
            // console.log("Hobbies are", this.hobbies)
    
            let bag = "";
            for(let i=0; i<=this.hobbies.length-1; i++){
                if(i==this.hobbies.length-1){
                    bag=bag+this.hobbies[i];
                }else{
                    bag=bag+this.hobbies[i]+", ";
                }
                // OR 
                // if(i!=this.hobbies.length-1){
                //     bag=bag+this.hobbies[i]+", ";
                // }else{
                //     bag=bag+this.hobbies[i];
                // }
            }
            console.log("Hobbies are",bag);
    
        }
    };
    
    obj["print"]()
}

// OR
// with inbuilt method;
{
    let obj = {
        name: "Ram",
        age: 34,
        hobbies: ["coding", "biking"],
        print : function(){
            console.log("Hello",this.name);
            console.log("Age is",this.age);
            console.log("Hobbies are",this.hobbies.join(", "));
        }
    }
    obj["print"]();
}

/* output:-
Hello Ram
Age is 34
Hobbies are Coding, Running
*/

let obj = {
    name : "Ram",
    age : 34,
    hobbies : ["Coding","Biking"],

    print : function (){

        //print the name and age with the help of this method
        console.log("Hello",this.name);
        console.log("Age is",this.age);

        //update the value of hobbies[1]
        obj["hobbies"][1] = "Runnning";

        //store the obj["hobbies"] into the arr for running a loop on it
        let arr = obj["hobbies"];
        let bag = "";

        //run a loop on arr and concetinate the elements into the bag
        for(let i=0; i<arr.length; i++){
            if(i==arr.length-1){
                bag = bag + arr[i]+".";
            }else{
                bag = bag + arr[i] + ", ";
            }
        }

        //print the bag
        console.log("Hobbies are",bag);
    }
};

obj["print"]();