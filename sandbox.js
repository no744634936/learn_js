const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
  
      request.addEventListener('readystatechange', () => {
    
        if(request.readyState === 4 && request.status === 200){
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.readyState === 4){
          reject('could not fetch the data');
        }
    
      });
      
      request.open('GET', resource);
      request.send();
    });
  
  };
  
  getTodos('json/luigi.json').then(data => {
    console.log('promise resolved:', data);
  }).catch(err => {
    console.log('promise rejected:', err);
  });
  


  //伪代码
  // promise example
  const getSomething = () => {
  
    //resolve 跟 reject 这两个参数是规定好的。只能这样用
    return new Promise((resolve, reject) => {

      // 首先获取数据do something (fetch data)

      //当成功取得数据，使用resolve方法
      // resolve('some data');

      //当取得数据失败 使用reject方法
      reject('some error');
    });
  
  };
  
  //使用promise 方法一

  // getSomething().then(data => {
  //   console.log('promise resolved:', data);
  // }, err => {
  //   console.log('promise rejected:', err);
  // });
  

  //使用promise 方法二

  getSomething().then(data => {
    console.log('promise resolved:', data);
  }).catch(err => {
    console.log('promise rejected:', err);
  });