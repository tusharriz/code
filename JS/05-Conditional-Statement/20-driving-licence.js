// If a person is allowed to drive in India print "Apply for a license" or "NA".

let yearOfBirth= 1998;
let currentYear = 2025;
let age = currentYear - yearOfBirth;

console.log(age);

if (age >= 18) {
    console.log("Apply for license"); // Apply for license
} else {
    console.log("NA");
}