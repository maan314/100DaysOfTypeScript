/*************************** /
 ==FUNCTION REST PARAMETER==
/ ***************************/
console.log(`*********FUNCTION REST PARAMETER***********`)
//function with rest paramter and type annotations
function allAdd(...nums: number[]):number{
        let result = 0;
        for (let i=0; i < nums.length; i++){
            result += nums[i];
        }
        return result;
}
console.log(allAdd(10,5,6,20,23,50.3,));

/*************************** /
 =======ARROW FUNCTIONS======
/ ***************************/
console.log(`*********ARROW FUNCTIONS***********`)
let addWithArrow = (num1:number, num2:number,):number => num1 + num2;
console.log(addWithArrow(5,7));

/*************************** /
 ====ANNONYMOUS FUNCTIONS==
/ ***************************/
console.log(`*********ANNONYMOUS FUNCTIONS***********`);
const add = function (num3:number, num4:number):number{
    return num3 + num4
}
console.log(add(4,3));
