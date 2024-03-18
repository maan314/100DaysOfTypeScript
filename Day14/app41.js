/*41. Magicians: Make an array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array. */
var magicianNames = ['Harry Houdini', 'David ', 'Chris', 'Teller'];
function show_magicians(magicianNames) {
    magicianNames.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicianNames);
