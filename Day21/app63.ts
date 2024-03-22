/*63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.*/

//creating a type (type alias)
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; //only for circle
    width?: number; //only for rectangle
    hieght?: number; //only for rectangle
}
//Decscribing
let circle: Shape ={
    kind: "circle",
    radius: 5,
}
let rectangle: Shape ={
    kind: "rectangle",
    hieght: 10,
    width: 30,
}
console.log(circle);
console.log(rectangle);
