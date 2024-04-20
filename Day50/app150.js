/*150: Describe how asynchronous callbacks differ from synchronous code execution.
Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations, or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes. */
//synchronous  example
for (var i = 0; i < 19; i++) {
    console.log("After synchronous ".concat(i));
}
//Asynchronous
console.log("Before asynchronous operation");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation");
