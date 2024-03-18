/*41. Magicians: Make an array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array. */

let magicianNames: string[] = ['Harry Houdini', 'David ', 'Chris', 'Teller'];

function show_magicians(magicianNames:string[]){
    magicianNames.forEach(magician => {
        console.log(magician)
    });
}
show_magicians(magicianNames);