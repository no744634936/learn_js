const getData=(callback)=>{
    const request=new XMLHttpRequest();
    request.open("GET","https://jsonplaceholder.typicode.com/todos/1");
    request.send();
    
    request.addEventListener("readystatechange",()=>{
        if(request.readyState===4 && request.status===200){
            //在主函数里面给callback函数传参数。这种情况下error为undefined
            callback(request.responseText,undefined);
            
        }else if(request.readyState===4){
            //在主函数里面给callback函数传参数。这种情况下data为undefined
            callback(undefined,"have no data");
            
        }
        
    });
}

console.log(1);
console.log(2);


//callback方法里面有两种情况，获得数据，得到error
//这是一个异步方法。
getData((data,error)=>{
    // console.log(data,error);
    if(error){
        console.log(error);
        
    }else{
        console.log(data);
        
    }
});

console.log(3);
console.log(4);

