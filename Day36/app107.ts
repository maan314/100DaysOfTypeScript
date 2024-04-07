/*107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.*/

function isDivisible (numb: number) : boolean{
    //using modulus operator for checking remainder
    return numb % 2 === 0 && numb % 3 === 0;
}

console.log("Is Divisible by 2 and 3 :" ,isDivisible(12));
console.log("Is Divisible by 2 and 3 :" ,isDivisible(8));