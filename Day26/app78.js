/*78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.*/
//Function DECLARATIONS;
function squareDeclare(num1) {
    return num1 * num1;
}
//Function EXPRESSIONS;
var squareExpression = function (num1) {
    return num1 * num1;
};
//using both func to square the number 4;
console.log(squareDeclare(4));
console.log(squareExpression(4));
//two different ways to create func;
