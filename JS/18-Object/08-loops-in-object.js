//print the hobbies in new line using for loops
//Coding
//Graphic Novels
//Movies

let details={
    name: "Chunnu",
    age:20,
    location: "Manali",
    hobbies: ["Coding", "Graphic Novels", "Movies"] //array
};

for(let i=0; i<=details["hobbies"].length-1; i++){
    console.log(details["hobbies"][i]);
}

// Coding
// Graphic Novels
// Movies

// or

let arr = details["hobbies"]; //store in a variable
console.log(arr); //[ 'Coding', 'Graphic Novels', 'Movies' ]

for(let i=0; i<=arr.length-1; i++){
    console.log(arr[i]);
}

// Coding
// Graphic Novels
// Movies