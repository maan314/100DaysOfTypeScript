/*************************** /
 ====ANNONYMOUS FUNCTIONS==
/ ***************************/
//void
function greet(name) {
    console.log("Hi ".concat(name, "!"));
}
function noReturn() {
    //this func doesnt return any value
}
//never 
function throwError(message) {
    throw new Error(message);
}
// function infiniteLoop():never {
//     while(true){
//         //this func never exits
//     }
// }
