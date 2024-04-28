//Comparisons
/*Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.*/
//String comparison
alert( 'Z' > 'A' ); // true
alert( 'A' > 'Z' ); // false
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
//Comparison of different types
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
//Strict equality
alert( 0 == false ); // true
//Comparison with null and undefined
alert( null === undefined ); // false 
alert( null == undefined ); // true
//Strange result: null vs 0
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
//=================================================================================//
/*Conditional branching: if, '?'
Sometimes, we need to perform different actions based on different conditions.
To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.*/
//The “if” statement
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert( 'You are right!' );
//The “else” clause
if (year == 2015) {
    alert( 'You guessed it right!' );
  } else {
    alert( 'How can you be so wrong?' ); // any value except 2015
  }
//Several conditions: “else if”
if (year < 2015) {
    alert( 'Too early...' );
  } else if (year > 2015) {
    alert( 'Too late' );
  } else {
    alert( 'Exactly!' );
  }
//Conditional operator ‘?’
let age1 = prompt('How old are you?', '');
let accessAllowed = (age1 > 18) ? true : false;
alert(accessAllowed);
//Multiple ‘?’
let age = prompt('age?', 18);
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
alert( message );
