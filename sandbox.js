const form = document.querySelector('.signup-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(form.username.value);
});

// testing RegEx

const username = 'shaunyp';
const pattern = /^[a-z]{6,}$/;

//test return false or true
// let result = pattern.test(username);

// if(result){
//   console.log('regex test passed :)');
// } else {
//   console.log('regex test failed :(');
// }


//seach return the position.-1 mean do not  get a match .
let result = username.search(pattern);

console.log(result);