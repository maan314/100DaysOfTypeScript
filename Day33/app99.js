/*99: Generate a date object representing your next birthday and log it to the console.
Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not*/
function getBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day); // months are 0 indexed
    if (birthday < today) {
        //if this year date is passed show next year
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getBirthday(20, 12);
console.log("Next Birthday on:", nextBirthday.toLocaleDateString());
