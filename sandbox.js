// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log('item clicked');  //点击四个li中的任意一个都会显示item click
    // console.log(e);
    // console.log(e.target);       //显示点击的时哪一个元素。

    //给点击的目标元素加删除线
    e.target.style.textDecoration = 'line-through';
  });
});


// firt ,query the dom to get the element where we expect the event to happen
//second add an event listener to the event.
//third write a callback function which will fire when that event happens

//当一个事件发生的时候，浏览器会给callback 函数一个 e





