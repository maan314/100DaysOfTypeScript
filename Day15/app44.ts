/*44: Sandwiches: Summarize sandwich orders with varying ingredients. */

function make_sandwich(...ingredients: string[]): void {
    console.log('Sandwich Order:');
    console.log(`Making a sandwich with: ${ingredients.join()}.`);
  }     
  console.log(`\nEnjoy your Sandwich`);
  make_sandwich("Ham", "Cheese", "Tomato");
  make_sandwich("Turkey", "Swiss", "Mayo");
  make_sandwich("Peanut Butter", "Jelly");