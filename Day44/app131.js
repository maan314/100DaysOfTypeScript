"use strict";
/* 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.*/
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var alice = new person_1.Person("Alice");
alice.greet();
