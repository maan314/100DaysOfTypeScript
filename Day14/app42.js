//42: Great Magicians: Add "the Great" to magician names.
function makeGreat(magicianz) {
    var great_Magicians = [];
    for (var _i = 0, magicianz_1 = magicianz; _i < magicianz_1.length; _i++) {
        var magician = magicianz_1[_i];
        great_Magicians.push("the Great ".concat(magician));
    }
    return great_Magicians;
}
var magician_Names = ['Harry Houdini', 'David', 'Chris', 'Teller'];
var great_Magicians = makeGreat(magician_Names);
function showMagicians(magicianz) {
    console.log('Magicians:');
    for (var _i = 0, magicianz_2 = magicianz; _i < magicianz_2.length; _i++) {
        var magician = magicianz_2[_i];
        console.log(magician);
    }
}
showMagicians(great_Magicians);
