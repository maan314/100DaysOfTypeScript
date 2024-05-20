var Alice = {
    name: "Alice",
    age: 20,
};
var John = {
    name: "John",
    age: 25,
};
console.log(Alice);
console.log(John);
// Create an object that adheres to the 'Person' interface
var Salman = {
    name: "Salman",
    age: 23,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    },
};
Salman.greet("Hello, TypeScript!"); // Output: Alice says: Hello, TypeScript!
