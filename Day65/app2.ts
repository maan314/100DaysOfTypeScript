/******************************************** /
=====OPTIONAL AND DEFAULT PARAMETER==========
********************************************/
//OPTIONAL PARAMETER
function greetOptional(name:string,age?:number) {
    if(age !== undefined) {
        console.log(`Hi, ${name}! You are ${age} years old`);
    }else {
        console.log(`Hi, ${name}`);
    }
}
greetOptional("Aslam");
greetOptional("Haadi", 25);

//DEFAULT PARAMETER
function greetDefault(name:string,age:number = 25){
    console.log(`Hi, ${name}! You are ${age} years old`);
}
greetDefault("Khan");
greetDefault("Suffi", 30);

