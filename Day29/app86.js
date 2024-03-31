/*86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).*/
//this func finds the text presence;
function findTextpresence(str) {
    return str.includes("TypeScript");
}
//seeing if text mentions "TypeScript" 
console.log(findTextpresence("I love coding in TypeScript"));
