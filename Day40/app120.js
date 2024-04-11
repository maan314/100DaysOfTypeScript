/*120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.*/
var movies = ["3 Idiots", "The Core", "Blackhat", "Shawshank Redemption", "Inception", "Intersteller"];
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    console.log(movie);
}
