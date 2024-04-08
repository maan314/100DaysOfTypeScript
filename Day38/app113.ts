/*113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.*/


const countries = new Map< string, string> ();

countries.set("Japan", "Tokyo");
countries.set("South Korea", "Seoul");
countries.set("China", "Beijing");
countries.set("UK", "London");
countries.set("Canada", "Oktawa");

console.log(countries);

function capitalOfCanada(countries: Map<string,string>){
    if(countries.has("Canada")){
        console.log(`The Capital of Canada is: ${countries.get("Canada")}`);
    }else {
        console.log("Canada is not in the Map")
    }
}

capitalOfCanada(countries);