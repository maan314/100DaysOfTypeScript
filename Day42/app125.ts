/*125: Modify a method in an object to use the this keyword to access another property in the same object.
Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.*/

let square = {
    length: 10,
    width: 10,
    caclulateArea: function(){
        return this.length * this.width ; // this. access "width" and "length" property;
    }
};

console.log(square.caclulateArea());