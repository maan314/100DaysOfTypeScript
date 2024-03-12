/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.*/

let currentUsers:string[]=['aslam', 'hassan', 'badar', 'aadil', 'salman'];
let newUsers:string[]= [ 'Aslam', 'Aadil', 'khan', 'Badar', 'suffi'];

let userName:string[] = currentUsers.map(user => user.toLowerCase());

for (let newUser of newUsers){
    if(userName.includes(newUser.toLowerCase())) {
        console.log(`Sorry, the username ${newUser} is not available`)
    }else {
        console.log(`congratulations! the username ${newUser} is available`)
    }
}