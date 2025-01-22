let details={
    name: "Chunnu",
    age:20,
    location: "Manali",
    hobbies: ["Coding", "Graphic Novels", "Movies",
    {
        role: "munnu",
        age : 20
    }
    ]  
};

// console.log(details["hobbies"]);
// console.log(details["hobbies"][3]);
// console.log(details["hobbies"][3]["role"]);
// console.log(details["hobbies"][3]["role"]="dev");

let arr = details["hobbies"];

for(let i=0; i<=arr.length-1; i++){
    let obj = arr[i];
    // console.log(obj);
    if(obj[i]==["role"]){
        delete (obj["role"]);
        console.log(obj);
    }
}
  