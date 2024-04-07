/* 108: Compare two strings to check if they are identical, ignoring case sensitivity.
Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.*/
function identicalStrings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(identicalStrings("TypeScript", "typescript"));
console.log(identicalStrings("JavaScript", "Java"));
