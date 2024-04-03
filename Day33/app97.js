/*97: Write a function that returns the current date in the format "DD-MM-YYYY".
Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.*/
function getCurrentDate() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, "0"); //enuseres the day is two digit
    var month = String(now.getMonth() + 1).padStart(2, "0"); // adds 1 because months are 0 indexed.
    var year = now.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDate());
