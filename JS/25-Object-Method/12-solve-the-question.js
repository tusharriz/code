//IW Problem

// Create an object with following functionalities

// 1==> Ability to add student details and 3 subject marks
// 2==> Method to find the student with least and highest total 

let details = {
    student1: {
        name: "Ram",
        rollNo: 34,
        marks: { html: 56, css: 45, js: 78}
    },
    student2: {
        name: "Shyam",
        rollNo: 34,
        marks: { html: 86, css: 45, js: 58 }
    },
    student3: {
        name: "Hari",
        rollNo: 34,
        marks: { html: 85, css: 65, js: 58 }
    }
};

// console.log(details["student1"]["marks"]);

// BREAKDOWN;
// only marks;
{
    let marks =  {
        html : 56, 
        css : 45, 
        js : 78
    };
    // console.log(marks["html"]+marks["css"]+marks["js"]); //179;
    
    let total = 0;
    for(let key in marks){
        total+=marks[key];
    }
    // console.log(total); //179;
}

// only first student1;
{
    let student1 = {
        name : "Ram",
        rollNo : 34,
        marks : {
            html : 10,
            css : 20,
            js : 30
        },
    };

    // console.log(student1["marks"]["html"]+student1["marks"]["css"]+student1["marks"]["js"]);
    let total = 0;
    for(let key in student1["marks"]){
        // console.log(student1["marks"][key]);
        total += student1["marks"][key];
    }
    // console.log(total);
}


{
    // now, in whole object;

    for (let i in details) {
        // console.log(details[i]);
        let obj = details[i];
        console.log(obj);
        
    }
}

