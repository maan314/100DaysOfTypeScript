/*68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.*/

function multiply_Decimals(num1: number, num2: number):number{
        return Math.round((num1 * num2) *100) / 100;
}

console.log(multiply_Decimals(0.5,0.9));

