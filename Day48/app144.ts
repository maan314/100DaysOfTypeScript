/*144: Explain the use of the Promise.all() method with an example.
Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved or when the iterable contains no Promises. It is rejected if any of the passed Promises are rejected. This method is useful for aggregating the results of multiple promises.*/

const promise1 = Promise.resolve(6);
const promise2 = 62;
const promise3 = new Promise<string>((resolve) =>{
    setTimeout(resolve, 100, "Hoorah!");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); //outputs [6,62,"hoorah!"]
})
// This demonstrates how Promise.all waits for all promises to resolve and then logs the array of their results.