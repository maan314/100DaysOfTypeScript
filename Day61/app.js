/* Arrow functions, the basics*/
let sum = (a, b) => a + b;
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};*/
alert( sum(1, 2) ); // 3

let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");
welcome();
//Multiline arrow functions
let sum1 = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  alert( sum1(1, 2) ); // 3
//============TASK========//
//rewrite in arrow
/*function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);*/
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
//=========================================================================//
//=========================================================================//
//JavaScript specials//
//javaScript special is all that revision we cover in recent days after day 50//