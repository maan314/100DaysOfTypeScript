/*104: Create a function that generates a random hexadecimal color code.
Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.*/
function generateHexaColor() {
    var color = '#' + Math.floor(Math.random() *
        0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(generateHexaColor());
