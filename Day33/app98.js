/*98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.*/
function daysTillNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diffrnce = newYear.getTime() - today.getTime();
    var days = Math.ceil(diffrnce / (1000 * 60 * 60 * 24)); // converts to days
    return days;
}
console.log(daysTillNewYear() + " Days untill New Year");
