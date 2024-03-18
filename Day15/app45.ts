/*45: Cars: Create detailed car objects with flexible properties. */

function make_car(manufacturer: string, model:string,  ...options:[string,any][]):
Object{
    let car = {manufacturer, model };
    options.forEach(([key, value])=>
    car[key]= value);
    return car;
}   
console.log(make_car("Toyota", "Supraa",["color", "White"],["year","2010"],["Boost", true]));

 