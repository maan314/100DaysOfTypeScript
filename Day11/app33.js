"use strict";
/*33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(number => {
    let ordinalEnding = 'th';
    if (number === 1) {
        ordinalEnding = 'st';
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    console.log(`${number}${ordinalEnding}`);
});
