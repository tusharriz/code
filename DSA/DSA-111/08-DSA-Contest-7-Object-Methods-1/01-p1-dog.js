// Problem - 1

// 1. Create an empty object called dog
// 2. Print the the dog object on the console

// 3. Add name, legs, color, age and bark properties for the dog object.
//  The bark property is a method which return *woof woof*.
// 4. Print name, legs, color, age and bark value from the dog object.

let dog = {
    name : "Shiro",
    legs : 4,
    color : "white",
    age : 5,
    bark : function(){
        return "woof woof";
    }
};

for(let key in dog){
    if(key == "bark"){
        // console.log(dog["bark"]());
    }else{
        // console.log(dog[key]);
    }
}

// Shiro
// 4
// white
// 5
// woof woof

{
// let dog = {};
// dog.name = "Shiro";
// dog.legs = 4;
// dog.color = "white";
// dog.age = 2;
// dog.bark = function(){
//     console.log("woof woof");
// };
// // console.log(dog);

// for(let key in dog){
//     console.log(dog[key]);
// }

let dog = {
    name : "Shiro",
    legs : 4,
    color : "white",
    age : 2,
    bark : function(){
        return "woof woof";
    }
}

for(let key in dog){
    if(key == "bark"){
        console.log(dog[key]());
    }else{
        console.log(dog[key]);
    }
}
}
