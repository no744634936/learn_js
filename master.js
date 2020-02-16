  
// type conversion
let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

let result = Number('hello');   //NaN
console.log(result);


let result = String(50);
let result = Boolean(100);  //true
let result = Boolean(0);    //false
let result = Boolean('0');  //true
let result = Boolean('');   //false

console.log(result, typeof result);