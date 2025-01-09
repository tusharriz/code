let gender = "female";
let age = 21;

if (gender == "male") {
    if (age >= 21) {
        console.log("Males: get marry");
    } else {
        console.log("Males: Can't get marry");
    }
} else {
    if (age >= 18) {
        console.log("Females: get marry"); // Females: get marry
    } else {
        console.log("Females: Can't get marry");
    }
}