/*Logical operators
There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT),
|| (OR): OR "||" finds the first truthy value */
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}
//================//
// && (AND): AND “&&” finds the first falsy value
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
let hours = 12;
let minute = 30;
if (hours == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}
//==================//
// ! (NOT): Converts the operand to boolean type: true/false. Returns the inverse value.
alert( !true ); // false
alert( !0 ); // true
//=============================================================================//
/*Nullish coalescing operator '??'*/
result = (a !== null && a !== undefined) ? a : b;
let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)
//exmple with assign user
user = "John";
alert(user ?? "Anonymous"); // John (user is not null/undefined)

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0
/*The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
so the result of || is the second argument, 100.
The height ?? 100 checks height for being null/undefined, and it’s not,
so the result is height “as is”, that is 0.*/
