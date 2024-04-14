/*132: Discuss the difference between default and named exports in JavaScript modules.
Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.*/
//importing  named exports;

import { utillOne, utillTwo } from "./utills";

//importing a default export;
import Calculator from "./Calculator";

console.log(utillOne(5,5));
console.log(utillTwo(10,2));
