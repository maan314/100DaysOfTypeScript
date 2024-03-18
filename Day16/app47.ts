/*47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables. */
let laptops = [
    {
        brand: "Dell",
        model: "E5550",
        year: 2021,
    },
    {
        brand: "Apple",
        model: "Macbook pro",
        year: 2020,
    },
    {
        brand: "Hp",
        model: "Surface",
        year: 2022
    }
];
let [laptop1, laptop2,laptop3]= laptops;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);