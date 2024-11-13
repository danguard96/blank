let a = "Employee";
let b = "Enrolled Member";
let c = "Subscriber";
let userRole;
let userMessage;

if (userRole != null) {
    
} else {

}
switch (userRole) {
    case "Employee":
        userMessage = "You have access to 'Dietary Services'.";
        break;

    case "Enrolled Member":
        userMessage = "You have access to 'Dietary Services' and one-on-one interaction with a dietician.";
        break;

    case "Subscriber":
        userMessage = "You have partial access to facilitate 'Dietary Services' only.";
        break;

    default:
        userMessage = "You need to enroll or subscribe first to avail this facility.";
}

console.log(userMessage);