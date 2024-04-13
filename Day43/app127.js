/*127: Convert a traditional function expression to an arrow function.
Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.*/
//Traditional Function
var traditionalFunction = function (a, b) {
    return a + b;
};
//converted to Arrow Function 
var arrowFunction = function (a, b) { return a + b; };
console.log('Traditional Function:', traditionalFunction(5, 6));
console.log("Arrow Function:", arrowFunction(6, 9));
