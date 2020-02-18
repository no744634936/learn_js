const article = document.querySelector('article');

// console.log(article.children);             //得到一个htmlCollection不能 使用 forEach
// console.log(Array.from(article.children)); //将 htmlCollection 转换成 array


Array.from(article.children).forEach(child => {
  child.classList.add('article-element');
});

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);//下一个同一级的元素
console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);





