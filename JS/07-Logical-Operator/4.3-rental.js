let hasAadhar = false;
let hasPAN = false;
let hasLicense = true;  // Only the license is available
let hasVoterID = false;

if (hasAadhar || hasPAN || hasLicense || hasVoterID) {
    console.log("Rental approved."); // Rental approved 
} else {
    console.log("Rental denied.");
}
