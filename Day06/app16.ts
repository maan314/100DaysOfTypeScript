/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
let guest_list:string[]=["Salman", "Usman", "Khan",];
guest_list.unshift("Muhammad Khan"); //adding one friend in beginning
guest_list.splice(guest_list.length / 2,0,'Arslan'); //adding one friend in middle
guest_list.push("Aadil");//adding one friend in beginning

guest_list.forEach(guest=>{
    console.log(`Hey Dear ${guest}'You are Invited to Dinner`);
})
console.log("Hey Everyone 'I Just found a bigger Dinner Table'");