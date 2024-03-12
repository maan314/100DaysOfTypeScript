"use strict";
/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.*/
let currentUsers = ['aslam', 'hassan', 'badar', 'aadil', 'salman'];
let newUsers = ['Aslam', 'Aadil', 'khan', 'Badar', 'suffi'];
let userName = currentUsers.map(user => user.toLowerCase());
for (let newUser of newUsers) {
    if (userName.includes(newUser.toLowerCase())) {
        console.log(`Sorry, the username ${newUser} is not available`);
    }
    else {
        console.log(`congratulations! the username ${newUser} is available`);
    }
}
