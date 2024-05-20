/*****************************
 * TYPE ANNOTATIONS WITH ARRAYS *
 ******************************/
//annotate an array of strings
let fruits: string[] = ["apple", "banana", "cherry"];

// Using a loop to process each element in the array using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i].toUpperCase()}`);
}



/*************************************************
 * TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS *
 *************************************************/

let arr_One: number[] = [1, 2, 3, 4, 5];
let arr_Two: string[] = ["X", "Y", "Z"];
let arr_Three: (string | number)[] = [1, 2, 3, 4, "X", "Y", "Z"];

