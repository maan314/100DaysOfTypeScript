/*37: Large Shirts: Default values in make_shirt(). */
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Size: ".concat(size));
    console.log("Message: ".concat(message));
    console.log("Summary: A ".concat(size, "-sized \"").concat(message, "\""));
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'JavaScript is fun!');
