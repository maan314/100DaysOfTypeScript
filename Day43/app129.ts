/*129: Explain how this behaves differently in arrow functions compared to traditional functions.
Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.*/

//demonstracting "this" in traditional vs Arrow function
const traditionalVsArrow = {
    value: "traditional Value",
    traditionalFunction: function () {
        console.log("Traditional Func:", this.value); // "this" refers to traditionalVsArrow object
    },
    arrowFunction: () => {
        console.log("Arrow Func:", this.value); // 'this' not bound to traditionalVsArrow object
    }
}
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
