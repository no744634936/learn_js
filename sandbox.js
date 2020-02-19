//when an event occurs like a click that element becomes the event target.(e.target)
//when this happens javascript will look to see if we have any event listeners attached to this element.
//if have listener ,it will fire that callback function for that element
//javacript 之后还会去检查，e.target的父节点是否拥有event listener。这里可以看到li 的父节点是ul。如果有就会触发listener里面的callback function

//然后 javascript 又会去检查 ul的父节点是否有 event listener，这样一级一级的往上找。

//when an event occurs like a click that element becomes the event target.(e.target)
//when this happens javascript will look to see if we have any event listeners attached to this element. 
//if have listener ,it will fire that callback function for that element 
//javacript 之后还会去检查，e.target的父节点是否拥有event listener。这里可以看到li 的父节点是ul。如果有就会触发listener里面的callback function 
//然后 javascript 又会去检查 ul的父节点是否有 event listener，这样一级一级的往上找。 
//所以 如果li 有个event 事件，而ul也有event 事件，当li的事件被触发，ul的事件也会被触发。


const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  ul.appendChild(li);  
});

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    console.log('event in LI');
    //e.stopPropagation(); 在这里加上这句，javascript 就不会buble up的找click事件了。
    e.stopPropagation();
    e.target.remove();
  });
});

ul.addEventListener('click', e => {
  console.log('event in UL');
});



//delegation is useful when we need to attach event listeners to many different elements
//like these li right here
//delegation 可以解决 branch 18 的问题