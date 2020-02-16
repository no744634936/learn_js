
// for loops

for(let i = 0; i < 5; i++){
  console.log('loop: ', i);
}


const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
  // console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}


// while loops
const names = ['shaun', 'mario', 'luigi'];
let i = 0;

while(i < 5){
  console.log('loop: ', i);
  i++;
}

while(i < names.length){
  console.log(names[i]);
  i++;
}



i = 8;
while(i > 5){
  console.log('loop: ', i);
  i--;
}




// do while loops
let i = 5;

do{
  console.log('val of i is: ', i);
  i++;
} while(i < 5);