/*129: Explain how this behaves differently in arrow functions compared to traditional functions.
Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.*/
var _this = this;
//demonstracting "this" in traditional vs Arrow function
var traditionalVsArrow = {
    value: "traditional Value",
    traditionalFunction: function () {
        console.log("Traditional Func:", this.value); // "this" refers to traditionalVsArrow object
    },
    arrowFunction: function () {
        console.log("Arrow Func:", _this.value); // 'this' not bound to traditionalVsArrow object
    }
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
