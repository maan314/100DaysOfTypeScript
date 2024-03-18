/*35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.*/
let commonAnimals: string[] = ['Dog', 'Cat', 'Rabbit'];

for (let animal of commonAnimals) {
  console.log(animal);
}
commonAnimals.forEach(animal => {
    console.log(`A ${animal} would make a great pet`);
});
console.log('Any of these Animal would make a great pet!')
