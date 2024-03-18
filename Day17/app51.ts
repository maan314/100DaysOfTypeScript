/*51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function. */

// Original function
function calculateArea(width:number, height:number):number{
    return width * height; 
}
console.log(calculateArea(9,5));

// Refactored Into an Arrow function
 let calculate_Area = (width:number, height:number):number => width * height;

 console.log(calculate_Area(15,12));

