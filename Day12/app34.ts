/*34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza. */

let favoritePizzas: string[] = ['Chicken Fajita', 'Pepperoni', 'Afghani Tikka'];

console.log('Pizza Names:');
for (let pizza of favoritePizzas) {
  console.log(pizza);
}
console.log('Pizza Statements:');
for (let pizza of favoritePizzas) {
    console.log(`1. ${pizza} pizza has a classic and simple taste.\n2. The combination of ingredients in ${pizza} is delightful.\n3. I always crave a slice of ${pizza} when I'm hungry.`);
}
console.log('I really love pizza!');