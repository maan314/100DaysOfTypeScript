/*95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.*/
function returnArr(numb) {
    return numb.filter(function (num) { return num > 10; });
}
var numb = [10, 20, 2, 34, 8, 9, 23, 44];
console.log(returnArr(numb));
