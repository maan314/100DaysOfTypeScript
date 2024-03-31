/*Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.*/
function stringToNumber(str) {
    return parseFloat(str);
}
console.log(stringToNumber("2345"));
console.log(stringToNumber("67.23"));
