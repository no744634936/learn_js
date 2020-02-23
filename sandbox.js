
const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest();
  
    request.addEventListener('readystatechange', () => {
  
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.readyState === 4){
        callback('could not fetch the data', undefined);
      }
  
    });
    
    request.open('GET', resource);
    request.send();
  
  };
  

  //这样可以依次调出 json文件夹里的三个文件，但是这样写会很难理解，
  //可以用promise 来重写。
  getTodos('json/luigi.json', (err, data) => {
    console.log(data);
    getTodos('json/mario.json', (err, data) => {
      console.log(data);
      getTodos('json/shaun.json', (err, data) => {
        console.log(data);
      });
    });
  });