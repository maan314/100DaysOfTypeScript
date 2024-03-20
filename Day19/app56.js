/*56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/
var mixedArray = [1, "Banana", 3, true, "Apple", "Usman"];
var stringArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringArray);
