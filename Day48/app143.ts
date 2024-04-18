/*143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.*/

// creating a promise that either will resolve or reject

    const conditionalPromise = new Promise<string>((resolve, reject) => {
        const success = Math.random() > 0.5;
      if (success) {
        resolve("Operation successful!");
      } else {
        reject(new Error("Operation failed!"));
      }
    });
  
  // Chaining .then() and .catch() directly onto the Promise declaration
  conditionalPromise
    .then((result) => console.log("resolve:", result))
    .catch((error) => console.error("reject:", error.message));
  // This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.