/*46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop. */
var laptop = {
    brand: "Dell",
    model: "E5550",
    year: 2021,
    describe: function () {
        console.log("This Laptop is ".concat(this.brand, ", ").concat(this.model, " and ").concat(this.year, " "));
    }
};
laptop.describe();
