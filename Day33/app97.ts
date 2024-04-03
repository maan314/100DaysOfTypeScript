/*97: Write a function that returns the current date in the format "DD-MM-YYYY".
Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.*/

function getCurrentDate():string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2,"0"); //enuseres the day is two digit
    const month = String(now.getMonth() + 1).padStart(2, "0"); // adds 1 because months are 0 indexed.
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}

console.log(getCurrentDate());
