// string
console.log("hello,world");

let email="zhanghaifeng@gmail.com";
console.log(email);


//string concatenation
let firstName="zhang";
let lastName="haifeng";

let fullName=firstName+lastName;
console.log(fullName);


//getting single character
console.log(fullName[2]);

//string length
console.log(fullName.length);


//string methods
console.log(fullName.toUpperCase());
let result=fullName.toLowerCase();
console.log(result);

let index=email.indexOf("n") 
let index=email.lastIndexOf("n")
let result=email.slice(2,5) //含2 不含5

let result = email.substr(4,10) //从四开始，取10个
n
let result= email.replace("n","w")//把z替换成w，只替换第一个n


// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;

console.log(html);












