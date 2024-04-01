/*93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.*/

function replaceBananaToMango(fruits1:string[]): void {
    const index = fruits1.indexOf("Banana");
    if (index !== -1) fruits1[index] = "Mango";
}

const fruits1: string[] = ["Apple","Banana","Strawberry","Cherry"];
replaceBananaToMango(fruits1);
console.log(fruits1);