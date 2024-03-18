/*46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop. */

let laptop = {
    brand: "Dell",
    model: "E5550",
    year: 2021,
    describe: function(){
        console.log(`This Laptop is ${this.brand}, ${this.model} and ${this.year} `);
    }
};

laptop.describe();

