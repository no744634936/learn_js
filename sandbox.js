const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome';

const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//   console.log(p.innerText);
//   p.innerText = 'new text!';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>this is a new h2</h2>';

// content.innerHTML += '<h2>this is an h2 added to the content</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});





//get and set attribute

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.textContent = 'The Net Ninja webiste';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green');  //如果这个属性不存在就新建。



//set css style

const title = document.querySelector('h1');
// 如果title原本就有设置style，写会覆盖掉原本的style
// title.setAttribute('style', 'margin: 50px;');  

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';   //删除margin属性。



//find add remove class

// const content = document.querySelector('p');

// console.log(content.classList);   可以查看content 有几个class
// content.classList.add('error');   
// content.classList.remove('success');


//当有很多个p tag的时候
//p.textContent p tag里面所有文字，被隐藏的也可以看见
//p.innerText   p tag 里面的文字，被隐藏了的文字看不见。

//div.innerHTML  可以取得div里面的文字，也可以取得div里面的元素(包含tag)。
//当 用innerHTML 来给div赋值时可以跟上tag<p>hahahah</p>。

const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  } else if(p.textContent.includes('success')) {
    p.classList.add('success');
  }
});