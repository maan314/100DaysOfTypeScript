/*******************
 * INTERFACE INTRO *
 *******************/
interface Person1 {
    name: string;
    age: number;
  }
  
  const Alice: Person1 = {
    name: "Alice",
    age: 20,
  };
  const John: Person1 = {
    name: "John",
    age : 25,
  }
  console.log(Alice);
  console.log(John)
//========================================================================================//
/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/
// Define an interface 'Person' with a method 'greet'
interface Person2 {
    name: string;
    age: number;
    greet(message: string): void;
  }
  // Create an object that adheres to the 'Person' interface
  const Salman: Person2 = {
    name: "Salman",
    age: 23,
    greet(message: string) {
      console.log(`${this.name} says: ${message}`);
    },
  };
  Salman.greet("Hello, TypeScript!"); // Output: Alice says: Hello, TypeScript!
//========================================================================================
/**************************************
 * REOPEN THE INTERFACE AND USE CASES *
 **************************************/
// Homepage Interface Declaration
interface Settings {
    readonly theme: boolean;
    font: string;
  }
  // Articles Page Interface Reopening
  interface Settings {
    sidebar: boolean;
  }
  // Contact Page Interface Reopening
  interface Settings {
    external: boolean;
  }
  // Create an object 'userSettings' that adheres to the merged 'Settings' interface
  let userSettings: Settings = {
    theme: true,
    font: "Anurati",
    sidebar: false,
    external: true,
  };