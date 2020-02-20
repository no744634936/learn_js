const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log('form submitted');
  // console.log(username.value);


  //username 可以是id 也可以是name 属性
  console.log(form.username.value);
});