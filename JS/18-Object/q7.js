//loops in object
let obj={
    name: "Chunnu",
    age:20,
    location: "Manali",
  };

  for( let key in obj){
    if(obj[key]=="Chunnu"){
        console.log("yes");
    }
  }