
/*
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

  这种写法好麻烦
*/


//  async & await
//　await 可以将promise 当作object 传给变量
//  async () 让方法的返回值变成promise
const getTodos = async () => {

    //fetch 返回的是一个promise
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    //response 出错，会把错误抛出去。catch 会接收
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }


    //.json返回的是一个promise
    //如果data出错。catch就会接收错误。
    let data = await response.json();
    return data;
  
  };
  

  console.log(1);
  console.log(2);
  
  //因为方法的返回值是一个promise ，所以要用then 跟catch
  //因为这个方法是个异步方法所以要花写时间，当打印完1，2，3，4 后才打印data
  getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:', err.message));

  console.log(3);
  console.log(4);