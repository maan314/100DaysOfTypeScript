/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/
// Declaration Syntax:
// Interface
interface PersonInterface {
    name: string;
    age: number;
  }
  // Type
  type PersonType = {
    name: string;
    age: number;
  };

  // Extending And Implementing:
  // Interface
  interface AnimalInterface {
    type: string;
  }
  
  interface Dog extends AnimalInterface {
    bark(): void;
  }
  
  class Labrador implements Dog {
    type: string = "dog";
    bark() {
      console.log("Woof!");
    }
  }
  
  // Type
  type AnimalType = {
    type: string;
  };
  
  type Dogs = AnimalType & {
    bark(): void;
  };
  
  const labrador: Dogs = {
    type: "dogs",
    bark() {
      console.log("Woof!");
    },
  };
  
  // Compatibility:
  interface Car {
    brand: string;
  }
  
  interface Car {
    model: string;
  }
  
  const myCar: Car = {
    brand: "Toyota",
    model: "Supraa",
  };