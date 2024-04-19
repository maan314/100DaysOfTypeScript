/*145: Create a function that accepts a callback and invokes it with some arguments.
Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.*/
function executeCallBack(
    callback: (argument1: number, argument2: number) => void,
    argument1: number,
    argument2: number
): void {
    callback(argument1,argument2); // invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
const add = (a: number, b: number) => {
    console.log(a + b); // outputs the sum of a and b
};
executeCallBack(add, 9, 5);// Demonstrates invoking a callback function with arguments to perform an addition.
