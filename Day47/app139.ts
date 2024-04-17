/*139: List three reserved words in JavaScript and create a valid use case for each.
Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.*/

// reserved word :"let",
let count:number = 5;
//reserved word : "if",
if (count > 0){
    console.log("Count is greater than 0");
}
//Reserved word: return - used to exit a function and return a value from that function
function add(a:number, b:number){
        return a + b;
}
console.log(add(4,5));