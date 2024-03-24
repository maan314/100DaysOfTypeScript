function divideAndRemainder(divide, divisor) {
    var quoteint = Math.floor(divide / divisor);
    var remainder = divide % divisor;
    return { quoteint: quoteint, remainder: remainder };
}
console.log(divideAndRemainder(20, 3));
