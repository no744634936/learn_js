const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
  //新建一个html元素
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  //ul.append(li); //底部添加
  ul.prepend(li);
});

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // e.target.style.textDecoration = 'line-through';
    //点击那个元素那个元素就消失
    e.target.remove();
  });
});


//注意这里有一个问题
//打卡html文件
//点击项目，项目消失
//点击按钮，新建项目
//点击新建的项目，新建的项目不会消失









