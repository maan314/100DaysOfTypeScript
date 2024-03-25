/*72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.*/
    {
    let blockLet:string = "Visible inside the block";
    const blockConst:string = "Also visible inside the block";
        console.log(blockLet);
        console.log(blockConst);
    }
try {
    console.log(blockLet);
} catch (error) {
    console.log("`blockLet` is not accesible outside the block");
}
try {
    console.log(blockConst);
} catch (error) {
    console.log("`blockConst` won't be accessible outside the block");
}
// This shows that `let` and `const` keep variables safe inside the block where they're defined.SS
