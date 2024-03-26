/*75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.*/
function compoundOperator() {
    var x = 6;
    console.log("Initial x =", x);
    //using compound assignments operator
    x += 3;
    console.log("aftr addition:", x);
    x -= 5;
    console.log("aftr subtraction:", x);
    x *= 2;
    console.log("aftr multiplication:", x);
    x /= 2;
    console.log("aftr division:", x);
}
compoundOperator();
