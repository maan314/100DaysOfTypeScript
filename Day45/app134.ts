/*134: Take a JSON string and parse it into a JavaScript object.
Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.*/

//JSON STRING
const json_String = '{"name":"Khan", "age": "25", "city":"Karachi"}';
//Parse into JavaScript Object
const person1 = JSON.parse(json_String);

console.log(person1);
