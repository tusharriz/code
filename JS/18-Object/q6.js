let details={
  name: "Chunnu",
  age:20,
  address:[{
    city: "New Delhi",
    pin: "12345",
    house: "345"
  }]
};

let arr = (details["address"]);

for(let i=0; i<=arr.length-1; i++){
  if(arr[i]==["pin"]){
    console.log("yes");
  }
}

// let test = [];

// test.push(details["address"]);
// console.log(test);
