/* 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states: pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle operations that take some time to complete, like fetching data or timing events.*/

// creating a promise that will complete after 2 seconds

const helloPromise = new Promise<string>((resolve)=> {
    setTimeout(() => {
       resolve("Hello, World!"); 
    }, 2000);
});

helloPromise.then((message) => console.log(message));
// After 2 seconds, "Hello, World!" will be logged to the console.