/*59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it.*/

function makePlus(addValue:number):( number)=> number{
    return function (number:number):number {
        return number + addValue;
    };
}

let addFive = makePlus(5);
console.log(addFive(15));