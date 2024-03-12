/*
12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
*/

let frndz:string[]=["shahbaz", "salman", "Usman", "khan"];

for (let i=0; i<frndz.length; i++){
    let greetingMsg:string=`Hello, ${frndz[i]} Have a Great Day`;
    console.log(greetingMsg);
}