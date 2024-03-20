/*56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/

let mixedArray = [1,"Banana", 3, true, "Apple", "Usman"];

let stringArray = mixedArray.filter( item => typeof item === "string");

console.log(stringArray);
