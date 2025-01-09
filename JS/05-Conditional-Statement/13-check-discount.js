`Based on the total_bill amount, a discount is applied as follows:
-More than $1000: 20% discount
-More than $500: 10% discount
-Otherwise: No discount`

let total_bill = 799;  // Example bill amount

if (total_bill > 1000) {
    console.log("20% discount");
} else if (total_bill > 500) {
    console.log("10% discount"); // 10% discount
} else {
    console.log("No discount");
}