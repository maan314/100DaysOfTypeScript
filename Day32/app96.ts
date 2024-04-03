/*96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.*/

function calculateNumberSum (numbers:number[]):number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

const numbers:number[] = [2,2,3,2,5,6];

console.log(calculateNumberSum(numbers));
