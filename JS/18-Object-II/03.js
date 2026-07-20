let arr = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] },
    ],
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] },
    ],
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] },
    ],
  },
];


for(let i=0; i<=arr.length-1; i++){
    let total1= 0;
    let total2= 0;
    let marks1 = arr[i]["students"][0]["marks"]; // [10, 20, 30]
    let marks2 = arr[i]["students"][1]["marks"]; // [ 20, 30, 40]

    // console.log(marks1); // [10, 20, 30]
    // console.log(marks2); // [ 20, 30, 40 ]
    
    for(let j=0; j<=marks1.length-1; j++){
        total1 = total1 + marks1[j];
        total2 = total2 + marks2[j];
    }

    if(total1>total2){
      console.log(arr[i]["grade"]+"-"+arr[i]["students"][0]["name"]+"-"+total1)
    }else{
      console.log(arr[i]["grade"]+"-"+arr[i]["students"][1]["name"]+"-"+total2)
    }
    // console.log(total1);
    // console.log(total2);     
}
    
