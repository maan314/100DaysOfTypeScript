/*77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
Explain & TIP: Default parameters allow your functions to have preset values for their parameters. These values are used if no other value is provided, making functions more flexible.*/
function greetUser(name) {
    if (name === void 0) { name = "Annonymous"; }
    console.log("Hello ".concat(name));
}
greetUser("Usman");
greetUser();
