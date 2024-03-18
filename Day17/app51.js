/*51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function. */
// Original function
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(9, 5));
// Refactored Into an Arrow function
var calculate_Area = function (width, height) { return width * height; };
console.log(calculate_Area(15, 12));
