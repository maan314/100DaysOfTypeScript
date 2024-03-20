/*54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.*/

function createObject (key: string, value: string){
    let dynamicObject = {};
    dynamicObject[key]= value;
    return dynamicObject;
}
let userPrefernce = createObject("theme","dark");

console.log(userPrefernce);

