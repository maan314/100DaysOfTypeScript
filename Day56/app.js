/* STRING CONERSION
String conversion happens when we need the string form of a value.
For example, alert(value) does it to show the value.
We can also call the String(value) function to convert a value to a string:*/
let value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string
//============================================================//
/* Numeric Conversion
Numeric conversion in mathematical functions and expressions happens automatically.
For example, when division / is applied to non-numbers:
alert( "6" / "2" ); 3, strings are converted to numbers
We can use the Number(value) function to explicitly convert a value to a number:*/
let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

/*============================================================*/
/* Boolean Conversion
Boolean conversion is the simplest one.
The conversion rule:
Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.*/
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

//=================================================================//
/*BASIC OPERATORS, MATHS
Terms: “unary”, “binary”, “operand”
An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:*/
let b = 1;
b = -b;
alert( b ); // -1, unary negation was applied
/*An operator is binary if it has two operands. The same minus exists in binary form as well:*/
let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values
//Remainder %
alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
//Exponentiation **
alert( 2 ** 2 ); // 2² = 4
//========================================================//
/*String concatenation with binary + */
let s = "my" + "string";
alert(s); // mystring
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
//==========================================================//
/*Numeric conversion, unary + */
let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", the binary plus concatenates strings
//======================================================//
/*Assignment */
let z = 2 * 2 + 1;
alert( z ); // 5
/*Chaining assignments
Another interesting feature is the ability to chain assignments: */
let j, k, l;
j = k = l = 2 + 2;
alert( j ); // 4
alert( k ); // 4
alert( l ); // 4
//===================================================================//
/*Increment/decrement
Increasing or decreasing a number by one is among the most common numerical operations.
So, there are special operators for it:
Increment ++ increases a variable by 1:*/
let counter = 2;
counter++;
alert( counter ); // 3
// Decrement -- decreases a variable by 1:
let counter1 = 2;
counter1--;
alert( counter1 ); // 1
