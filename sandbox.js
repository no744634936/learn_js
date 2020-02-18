const ul = document.querySelector('ul');
// ul.remove();  //删除ul

const button = document.querySelector('button');

button.addEventListener('click', () => {
 //create a new html tag
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  //ul.append(li);    底部添加
  ul.prepend(li);     //头部添加
});

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // e.target.style.textDecoration = 'line-through';
    //点击哪个，哪个就消失
    e.target.remove();
  });
});




//注意这里有个问题，当我点击项目的时候，项目会删除，
//当我点击按钮的时候，会有新的项目被添加，
//但是当我点击新添加的项目的时候，新项目不会被删除。