//when we click the li ,javascript will bubble up to ul. and excute ul click function
//我点击ul里面的元素，e.target里面就包含了，这个元素的一些属性，比如tagName=LI


const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  ul.appendChild(li);  
});


ul.addEventListener('click', e => {
//   console.log(e.target);
  console.log(e);
if (e.target.tagName==="LI"){
    e.target.remove();
}

});
