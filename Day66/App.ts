/*==================/
 * UNION TYPES *
==================*/

let myVariable: string | number;

myVariable = "Hello"; // Valid assignment
console.log(myVariable)

myVariable = 53;       // Valid assignment
console.log(myVariable)
//IF we uncomment this line in below it would occur an Error
// myVariable = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.

/*==================/
 * LITERAL TYPES *
=================*/
//varibles
let direction: "left" | "right" | "up" | "down";
//function
function setColor(color: "red" | "green" | "blue") {

}
/*==================/
 * NULLABLE TYPES *
=================*/

let user_name: string | null = "JOhn"; // The variable can hold a string or null
let age: number | null = null;

function greetUser(user_name: string | null) {
    if (user_name === null) {
        console.log("HI, Guest!");
    } else {
        console.log(`HI, ${user_name}!`);
    }
}
greetUser("JOhn"); // Output: Hello, Glitcher!
greetUser(null);     // Output: Hello, Guest!

/*==================/
 * TYPES ALIAS *
=================*/
type My_String = string;

let myName: My_String = "Glitcher";
type StringOrNumber = string | number;
let my_Value: StringOrNumber = 15;
// another example
type Employee = {
  name: string;
  age: number;
  email?: string;
};
const john: Employee = {
  name: "John",
  age: 20,
  email: "John@example.com",
};
const khan: Employee = {
  name: "Khan",
  age: 27,
};
console.log(john);
console.log(khan);

/*==================/
 * INTERSECTION TYPE *
====================*/
type First_Type = {
    name: string;
    age: number;
  };
  
type Second_Type = {
    address: string;
    phone: string;
  };
  
  type CombinedType = First_Type & Second_Type;
  
  const person: CombinedType = {
    name: "Khan Sahab",
    age: 25,
    address: "145 Main Street Block D",
    phone: "123-456-7890",
  };
