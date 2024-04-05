/*104: Create a function that generates a random hexadecimal color code.
Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.*/

function generateHexaColor() : string {
    const color = '#' + Math.floor(Math.random() * 
    0xFFFFFF).toString(16).padStart( 6, '0')
    return color; //returns random color code

}

console.log(generateHexaColor());
//generated a random number, convert it to hexadecimal, and ensure it's 6 characters long.