/* Loops: while and for*/
//The “while” loop
var i = 0;
while (i < 3) { // shows 0, then 1, then 2
    alert(i);
    i++;
}
i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
    alert(i);
    i--;
}
//The “do…while” loop
//This form of syntax should only be used when you want the body of the loop to execute at least once
i = 0;
do {
    alert(i);
    i++;
} while (i < 3);
//The “for” loop
for (var i_1 = 0; i_1 < 3; i_1++) { // shows 0, then 1, then 2
    alert(i_1);
}
//======================================================================//
/*The "switch" statement*/
var a = 2 + 2;
switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly!');
        break;
    case 5:
        alert('Too big');
        break;
    default:
        alert("I don't know such values");
}
//Type matters
var arg = prompt("Enter a value?");
switch (arg) {
    case '0':
    case '1':
        alert('One or zero');
        break;
    case '2':
        alert('Two');
        break;
    case "3":
        alert('Three');
        break;
    default:
        alert('An unknown value');
}
