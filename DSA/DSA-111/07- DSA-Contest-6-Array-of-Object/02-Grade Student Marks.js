// Grade Student Marks

// - Given an object of student grades and their marks in the mentioned below format,
// print the highest scored student for each grade along with the total

// Sample Output
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90

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


for (let i = 0; i <= arr.length - 1; i++) {

  let arr1 = arr[i]["students"];
  // console.log(arr1);
  // [
  //     { name: 'Nrupul', marks: [ 10, 20, 30 ] },
  //     { name: 'Prateek', marks: [ 20, 30, 40 ] }
  // ]

  let max = -Infinity;
  let grade = null;
  let naam = "";

  for (let j = 0; j <= arr1.length - 1; j++) {
    // console.log(arr1[j]["marks"]);
    // [ 10, 20, 30 ] }
    // [ 20, 30, 40 ] }

    let num = arr1[j]["marks"];
    let add = 0;

    for (let k = 0; k <= num.length - 1; k++) {
      // console.log(num[k]);

      add = add + num[k];
      if (add > max) {
        max = add;
        grade = arr[i]["grade"];
        naam = arr1[j]["name"];
      }
    }
  }
  // console.log(grade+"-"+naam+"-"+max);
}

// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90

{
let arr = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]

// console.log(arr[0]["students"][0]["marks"]);
for(let i=0; i<=arr.length-1; i++){
  let student1 = arr[0]["students"][0]["marks"];
  let student2 = arr[0]["students"][1]["marks"];

  // console.log(student1)
  // console.log(student2)
  
  let student1Marks = 0;
  let student2Marks = 0;
  let bag = "";

  for(let j=0; j<=student1.length-1; j++){
    // console.log(student1[j])
    student1Marks += student1[j];
    student2Marks += student2[j];
  }

  if(student1Marks > student2Marks){
    bag = bag + arr[i]["grade"]+"-"+arr[i]["students"][0]["name"]+"-"+student1Marks;
  }else{
    bag = bag + arr[i]["grade"]+"-"+arr[i]["students"][1]["name"]+"-"+student2Marks;
  }

  console.log(bag);
  // V-Prateek-90
  // VI-Albert-90
  // VII-Sandhya-90
}
}
