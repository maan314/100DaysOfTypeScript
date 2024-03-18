/*48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result. */

let priceSet1 : number[]=[1000, 900, 4000, 2000];
let priceSet2 : number[]=[7000, 3000, 5000, 1050];

let combinedPrices: number[]= [...priceSet1,...priceSet2].sort((a,b)=> a-b);
console.log(combinedPrices);
