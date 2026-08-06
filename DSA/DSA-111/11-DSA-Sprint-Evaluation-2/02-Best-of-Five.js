// Best of Five

let obj = {
    marks : [92, 67, 88, 25, 30, 45],
    subjects : ["Maths", "Chemistry", "History", "English", "Biology", "Physics"],

    bestOfFive : function(){

        let bof = 0;
        let min = Infinity;
        let minsub = "";
        let maxsub = "";
        let max = -Infinity;

        for(let i=0; i<=this.marks.length-1; i++){
            if(this.marks[i] < min){
                min = this.marks[i];
                minsub = this.subjects[i];
            }
            if(this.marks[i] > max){
                max = this.marks[i];
                maxsub = this.subjects[i];
            }
        }
        
        for(let j=0; j<=this.marks.length-1; j++){
            if(min !== this.marks[j]){
                bof += this.marks[j];
            }
        }
        console.log(bof); // 322
        console.log(minsub); // English
        console.log(maxsub); // English
    }
}
obj["bestOfFive"]();



{
let obj = {
    marks: [92, 67, 88, 25, 30, 45],
    subjects: ["Maths", "Chemistry", "History", "English", "Biology", "Physics"],
    bestOfFive: function () {
        let arr = this.marks;
        let totalMarks = 0;
        let minMarks = Infinity;

        for(let i=0; i<=arr.length-1; i++){
            // totalMarks += arr[i];
            if(arr[i] <minMarks){
                minMarks = arr[i];
            }
        }
        // console.log(minMarks); // 25
        for(let j=0; j<=arr.length-1; j++){
            if(minMarks != arr[j]){
                totalMarks += arr[j];
            }
        }
        console.log(totalMarks); // 322
    },

    badSubject: function () {
        let arr = this.marks;
        let subject;
        let minMarks = Infinity;
        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] < minMarks) {
                minMarks = arr[i];
                subject = this.subjects[i];
            }
        }
        console.log(subject); // English

    },

    bestSubject: function () {
        let arr = this.marks;
        let subject;
        let max = -Infinity;
        for(let i=0; i<=arr.length-1; i++){
            if(arr[i] > max){
                max = arr[i];
                subject = this.subjects[i];
            }
        }
        console.log(subject); // Maths
    }
}


obj["bestOfFive"]();
obj["badSubject"]();
obj["bestSubject"]()
}