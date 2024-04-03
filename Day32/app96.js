/*96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.*/
function calculateNumberSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [2, 2, 3, 2, 5, 6];
console.log(calculateNumberSum(numbers));
