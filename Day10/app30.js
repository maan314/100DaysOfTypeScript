"use strict";
//30: Hello Admin: Greet users differently, especially 'admin'.
let usernames = ['admin', 'Usman', 'Aadil', 'Khan', 'Salman'];
for (let username of usernames) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
