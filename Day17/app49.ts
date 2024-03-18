/*49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby. */

// Defines a function that accepts multiple hobbies as arguments
 function myHobbies(...hobbies:string[]){
    //loop through each hobby in the array
    hobbies.forEach(hobby => {
        //log statement
        console.log(`I enjoy ${hobby}`);
        
    });
 }
 myHobbies("Coding","Reading","Playing Cricket");
