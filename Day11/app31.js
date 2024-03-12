"use strict";
/*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. */
let userNames = ['Khan', 'Aadil', 'admin', 'salman', 'Usman'];
for (let userName of userNames) {
    if (userName === 'admin') {
        console.log("Hello, Admin, You Welcome");
    }
    else {
        console.log(`Hello ${userName}, Thank you for Login`);
    }
}
//By removin all the users
userNames.splice(0);
if (userNames.length === 0) {
    console.log(`we need to find some user ${userNames}`);
}
console.log(`${userNames}`);
