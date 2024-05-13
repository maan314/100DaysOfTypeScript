/*************************** /
 ====ANNONYMOUS FUNCTIONS==
/ ***************************/

//void
function greet(name:string):void {
    console.log(`Hi ${name}!`)
}

function noReturn():void {
    //this func doesnt return any value
}

//never 
function throwError(message:string) {
    throw new Error(message);
}

function infiniteLoop():never {
    while(true){
        //this func never exits
    }
}