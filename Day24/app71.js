/*71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.*/
//With let ;
var age = 25;
age = 22;
console.log(age);
//with const ;
var fullName = "Aslam";
try {
    fullName = "Suffi";
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
