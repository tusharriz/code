// don't want to print name

let obj = {
  name: "Ram",
  age: 26,
  gender: "male",
  city: "Delhi",
  hobbies: "coding",
};

for(let i in obj){
    if(i=="name"){
        continue;
    }
    console.log(obj[i]);
}

// 26
// male
// Delhi
// coding

