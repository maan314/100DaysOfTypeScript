/*43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list. */

let magicianNames: string[] = ['Harry Houdini', 'David', 'Chris', 'Teller'];

function show_magicians(magicians: string[]): void {
    console.log('Magicians:');
    for (let magician of magicians) {
        console.log(magician);
    }
  }

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`the Great ${magician}`);
    });
    return greatMagicians;
  }

  let greatMagicians: string[] = make_great([...magicianNames]);
  
  show_magicians(magicianNames);
  show_magicians(greatMagicians);