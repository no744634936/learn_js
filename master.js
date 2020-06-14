  
// arrays

let ninjas = ['shaun', 'ryu', 'chun-li'];

ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];

// array length
console.log(ninjas.length);

// array methods

let result = ninjas.join(',');
let result = ninjas.indexOf('chun-li');
let result = ninjas.concat(['ken', 'crystal']);
let result = ninjas.push('ken');
let result = ninjas.pop();

console.log(result);
console.log(ninjas);



//数组的类型是一个object
//如何判断是不是一个数组用 Array.isArray() 方法来判定

let type=typeof [];
console.log(type);     //object


let flag=Array.isArray([]);    
console.log(flag);     //true

