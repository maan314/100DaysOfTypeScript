/*113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.*/
var countries = new Map();
countries.set("Japan", "Tokyo");
countries.set("South Korea", "Seoul");
countries.set("China", "Beijing");
countries.set("UK", "London");
countries.set("Canada", "Oktawa");
console.log(countries);
function capitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The Capital of Canada is: ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map");
    }
}
capitalOfCanada(countries);
