/*43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list. */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianNames = ['Harry Houdini', 'David', 'Chris', 'Teller'];
function show_magicians(magicians) {
    console.log('Magicians:');
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("the Great ".concat(magician));
    });
    return greatMagicians;
}
var greatMagicians = make_great(__spreadArray([], magicianNames, true));
show_magicians(magicianNames);
show_magicians(greatMagicians);
