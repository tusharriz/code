// Grade Student Marks
`
- Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total

Sample Output
V-Prateek-90
VI-Albert-90
VII-Sandhya-90`;

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
  let marks1 = arr[i]["students"][0]["marks"];
  let marks2 = arr[i]["students"][1]["marks"];

  let total1 = 0;
  let total2 = 0;

  for(let j=0; j<=marks1.length-1; j++){
    total1 += marks1[j];
    total2 += marks2[j];
  }

  if(total1 > total2){
    console.log(arr[i]["grade"]+"-"+arr[i]["students"][0]["name"]+"-"+total1);
  }else{
    console.log(arr[i]["grade"]+"-"+arr[i]["students"][1]["name"]+"-"+total2);
  }

}