fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    // console.log(response);
    // console.log(response.json());
    
    //response.json() 返回的是一个promise 所以要用 return 将数据data传给下一个then
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });