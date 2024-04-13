/*128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.*/

const multipleParameters = (...numbers: number[]) =>
        numbers.reduce((total, number) => total * number, 1)

console.log(multipleParameters(3,5,7,6));
