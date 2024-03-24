/*69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.*/

function divideAndRemainder(divide:number, divisor:number):
    {   
        quotient:number; 
        remainder: number;
    } {
        let quotient = Math.floor(divide / divisor);
        let remainder = divide % divisor;
        return {quotient, remainder};
    }
    console.log(divideAndRemainder(20, 3));
