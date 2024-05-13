/******************************************** /
=====OPTIONAL AND DEFAULT PARAMETER==========
********************************************/
//OPTIONAL PARAMETER
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log("Hi, ".concat(name, "! You are ").concat(age, " years old"));
    }
    else {
        console.log("Hi, ".concat(name));
    }
}
greetOptional("Aslam");
greetOptional("Haadi", 25);
//DEFAULT PARAMETER
function greetDefault(name, age) {
    if (age === void 0) { age = 25; }
    console.log("Hi, ".concat(name, "! You are ").concat(age, " years old"));
}
greetDefault("Khan");
greetDefault("Suffi", 30);
