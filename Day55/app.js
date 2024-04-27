// Data types
// A value in JavaScript is always of a certain type. For example, a string or a number.
// There are eight basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.
// We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:
let message = "hello";
message = 123456;
// NUMBER
// The number type represents both integer and floating point numbers.
let n = 123;
n = 12.345;
// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
// We can get it as a result of division by zero:
alert( 1 / 0 ); // Infinity

//NaN:represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
alert( "not a number" / 2 ); // NaN, such division is erroneous
//NaN is sticky. Any further mathematical operation on NaN returns NaN:
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN
//BIGINT:A BigInt value is created by appending n to the end of an integer: the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
//STRING
//A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
// In JavaScript, there are 3 types of quotes.
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
//BOOLEAN (logical type)
//The boolean type has only two values: true and false.
let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")
//The “null” value
// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:
let age = null;
alert(age); // null
// The “undefined” value
// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
let age1;
alert(age1); //undefined
//The typeof operator
//The typeof operator returns the type of the operand. 
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
///////////////////////////TASK//////////////////////////////////////
let name = "I Love JavaScript";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); //  hello I Love JavaScript

//Interaction: alert, prompt, confirm
//As we’ll be using the browser as our demo environment, let’s see a couple of functions to interact with the user: alert, prompt and confirm.
//ALERT 
alert("Hello");
//PROMPT
let age2 = prompt('How old are you?', 50); //50 is default value 
alert(`You are ${age2} years old!`);
//CONFIRM
//The function confirm shows a modal window with a question and two buttons: OK and Cancel.The result is true if OK is pressed and false otherwise.
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed
/////////////////////TASK////////////////////////////
let name3 = prompt("What is your name?", "");
alert(name3);



