//42: Great Magicians: Add "the Great" to magician names.
function makeGreat(magicianz: string[]): string[] {
    let great_Magicians: string[] = [];
    for (let magician of magicianz) {
      great_Magicians.push(`the Great ${magician}`);
    }
    return great_Magicians;
  }
  let magician_Names: string[] = ['Harry Houdini', 'David', 'Chris', 'Teller'];
  let great_Magicians: string[] = makeGreat(magician_Names);

  function showMagicians(magicianz: string[]): void {
    console.log('Magicians:');
    for (let magician of magicianz) {
      console.log(magician);
    }
  }
  showMagicians(great_Magicians);