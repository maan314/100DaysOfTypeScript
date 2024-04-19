/*146: Show an example of a callback function used to filter an array of numbers.
Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function. This method is commonly used to search through an array and create a subset of it based on certain criteria.*/
var numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// using .filter() with callback func to filter out numbers greater than 6
var filteredNumb = numb.filter(function (numb) { return numb > 6; });
console.log(filteredNumb); // The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.
