// Given stored username and password and input username and password, Print if the user can login or not.

let stored_username = "varun";
let stored_password = "varun@123";
let input_user = "varun";
let input_password = "varun@123";

if (input_user == stored_username) {
    if (input_password == stored_password) {
        console.log("Valid login"); // Valid Login
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Wrong username");
}