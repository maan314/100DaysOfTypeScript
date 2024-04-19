/*147: Explain how to handle errors in a callback pattern.
Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution.*/
function fetchData(callback) {
    var error = new Error("Failed to fetch data");
    var data = "Data Recieved";
    //fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, data); // Data fetched success
    }
    else {
        callback(error); // error passes to callback
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error(error.message); // handles error
    }
    else {
        console.log(data); // process data
    }
});
