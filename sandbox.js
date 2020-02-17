//最有用的两个方法。 document.querySelector   and   document.querySelectAll
// query single element
//const para = document.querySelector('p');
// const para = document.querySelector('.error');
// const para = document.querySelector('#img');
const para = document.querySelector('div.error');

console.log(para);

// query multiple elements at once
//return nodeList .can use forEach.
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log(paras, errors);
console.log(paras[1], errors[0]);


//use forEach function
paras.forEach(para=>{
    console.log(para);
    
})


//chrome -> console -> select element -> copy ->copy selector 就可以取得一个独特的seletor 标识了。




//其他的方法来获得 element

// get an element by ID
const title= document.getElementById('page-title');
console.log(title);

// get elements by their class name
//return html collection and can not use forEach to loop out elements
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// get elements by their tag name
//return html collection and can not use forEach to loop out elements
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
