const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log('form submitted');
  // console.log(username.value);

  //不管是id 还是name是username 都可以这样用。
  console.log(form.username.value);
});