/*************************** /
 ==FUNCTION REST PARAMETER==
/ ***************************/
console.log("*********FUNCTION REST PARAMETER***********");
//function with rest paramter and type annotations
function allAdd() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(allAdd(10, 5, 6, 20, 23, 50.3));
/*************************** /
 =======ARROW FUNCTIONS======
/ ***************************/
console.log("*********ARROW FUNCTIONS***********");
var addWithArrow = function (num1, num2) { return num1 + num2; };
console.log(addWithArrow(5, 7));
/*************************** /
 ====ANNONYMOUS FUNCTIONS==
/ ***************************/
console.log("*********ANNONYMOUS FUNCTIONS***********");
var add = function (num3, num4) {
    return num3 + num4;
};
console.log(add(4, 3));
