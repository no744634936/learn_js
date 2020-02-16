// function declaration
//不用打分号
function greet(){
    console.log('hello there');
}
greet();
  
  
// function expression
//注意要打分号。
const speak = function(){
console.log('good day!');
};

speak();


// arguments & parameters

const speak = function(name = 'luigi', time = 'night'){
    console.log(`good ${time}, ${name}!`);
};
  
  speak('mario', 'morning');
  speak();
  speak('shaun');


// return statements

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
}
  
const area = calcArea(5);
console.log('area is:', area);


// arrow functions

// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// arrow function
//arrow function  以const 开头
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area);

// practise arrow functions

const greet = () => 'hello, world';

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i]  + products[i] * tax;
  }
  return total;
}

console.log(greet());
console.log(bill([10,15,30], 0.2));




//callback function 就是把函数当作参数来传递
const myFunc=(callbackFunc)=>{
    let value=50;
    callbackFunc(value);
}

myFunc(function(value){console.log(value);})


// callbacks & forEach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];


// people.forEach(function(person){
//   console.log(`hello ${person}`);
// });

// people.forEach(person => {
//   console.log(`hello ${person}`);
// });


const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}
people.forEach(logPerson);