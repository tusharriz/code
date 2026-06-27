`Consider an application with multiple user roles where admin access is controlled by a boolean flag:`

let admin_access = false;

if (!admin_access) {
    console.log("Access Denied"); // Access Denied
} else {
    console.log("Welcome");
}
