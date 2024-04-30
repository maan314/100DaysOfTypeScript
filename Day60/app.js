/* Functions */
//Function Declaration: 
function show_Message() {
    alert( 'Hello everyone!' );
  }
  function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
  }
  showMessage('Ann', 'Hello!'); // Ann: Hello!
  showMessage('Ann', "What's up?"); // Ann: What's up?
// Returning a Value
function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  let age = prompt('How old are you?', 18);
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }
  // Functions == Comments
  function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
      alert( i ); // a prime
    }
  }
  showPrimes(20);
//==========================================================//
// Function expressions=
let sayHi = function() {
    alert( "Hello" );
  };
  sayHi();

// Callback functions:We’ll write a function ask(question, yes, no) with three parameters
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  ask("Do you agree?", showOk, showCancel);
  // usage: functions showOk, showCancel are passed as arguments to ask

//:Function Expression vs Function Declaration:
// Function Declaration
    function sum(a, b) {
        return a + b;
    }
  // Function Expression
    let sum = function(a, b) {
        return a + b;
     };
