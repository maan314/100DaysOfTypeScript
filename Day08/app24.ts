//24.More Conditional Tests
let city:string= 'Karachi';
console.log('Karachi' == 'Karachi');
console.log(city.toLowerCase() == 'Karachi');

let nmbr:number= 20;
console.log(nmbr == 20);
console.log(nmbr !== 20);
console.log(nmbr > 20);
console.log(nmbr < 20);
console.log(nmbr >= 20);
console.log(nmbr <= 20);

let men:boolean = true;
let women:boolean = false;
console.log(men && !women);
console.log(men || women);

let fruits:string[]=['Apple','Banana','Grapes','Strawbery'];
console.log(fruits.includes('Banana'));
console.log(!fruits.includes('Apple'));