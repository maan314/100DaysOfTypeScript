/*34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza. */
var favoritePizzas = ['Chicken Fajita', 'Pepperoni', 'Afghani Tikka'];
console.log('Pizza Names:');
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
console.log('Pizza Statements:');
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("1. ".concat(pizza, " pizza has a classic and simple taste.\n2. The combination of ingredients in ").concat(pizza, " is delightful.\n3. I always crave a slice of ").concat(pizza, " when I'm hungry."));
}
console.log('I really love pizza!');
