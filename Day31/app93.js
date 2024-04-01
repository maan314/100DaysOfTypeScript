/**/
function replaceBananaToMango(fruits1) {
    var index = fruits1.indexOf("Banana");
    if (index !== -1)
        fruits1[index] = "Mango";
}
var fruits1 = ["Apple", "Banana", "Strawberry", "Cherry"];
replaceBananaToMango(fruits1);
console.log(fruits1);
