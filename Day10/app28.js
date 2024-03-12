"use strict";
/*28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, */
let age = 15;
if (age < 2) {
    console.log('Person is a Baby');
}
else if (age >= 2 && age < 4) {
    console.log('Person is a Toddler');
}
else if (age >= 4 && age < 13) {
    console.log('person is a Kid');
}
else if (age >= 13 && age < 20) {
    console.log('person is teenager');
}
else if (age >= 20 && age < 65) {
    console.log('person is an adult');
}
else if (age >= 65) {
    console.log('Person is an Elder');
}
