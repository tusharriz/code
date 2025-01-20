/*
Output:-

Name is Chunnu
Age is 20
He lives in Manali
His hobbies are Coding, Graphic Novels, Movies.
*/


let details={
    name: "Chunnu",
    age:20,
    location: "Manali",
    hobbies: ["Coding", "Graphic Novels", "Movies"]
};

console.log("Name is",details["name"]);
console.log("Age is",details["age"]);
console.log("He lives in",details["location"]);

let arr = details["hobbies"]; // ["Coding", "Graphic Novels", "Movies"]
let bag = "";

for(let i=0; i<=arr.length-1; i++){
    if(i==arr.length-1){
        bag = bag + arr[i] + ".";
    }else{
        bag = bag + arr[i] + "," + " " ;
    }
}
console.log("His hobbies are",bag);

/*
Name is Chunnu
Age is 20
He lives in Manali
His hobbies are Coding, Graphic Novels, Movies.
*/