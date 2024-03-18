/*35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.*/
var commonAnimals = ['Dog', 'Cat', 'Rabbit'];
for (var _i = 0, commonAnimals_1 = commonAnimals; _i < commonAnimals_1.length; _i++) {
    var animal = commonAnimals_1[_i];
    console.log(animal);
}
commonAnimals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet"));
});
console.log('Any of these Animal would make a great pet!');
