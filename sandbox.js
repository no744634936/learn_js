
//数据被储存在console application localstorage里面
// store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', '50');

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// updating data
localStorage.setItem('name', 'luigi');
localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);

// deleting data from local storage
localStorage.removeItem('name');
localStorage.clear();    //删除全部

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);

//再localstorage里面储存object 或数组。
//首先要将object 或数组转换成字符串
const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
  ];
  
  //首先要将object 或数组转换成字符串
  // console.log(JSON.stringify(todos));
  localStorage.setItem('todos', JSON.stringify(todos));

  const stored = localStorage.getItem('todos');
  // console.log(stored);
  
  //在js代码里面使用的时候要将字符串转换成object 或数组
  console.log(JSON.parse(stored));