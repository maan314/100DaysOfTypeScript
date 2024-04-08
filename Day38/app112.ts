/*112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.*/

const countriesAndCapitals = new Map<string, string>();

countriesAndCapitals.set("Pakistan", "Islamabad",);
countriesAndCapitals.set("Bangladesh", "Dhaka");
countriesAndCapitals.set("China", "Beijing");

console.log(countriesAndCapitals); // Logs the Map with the countries and their capitals.
