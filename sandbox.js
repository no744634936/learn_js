const getData=(callback)=>{
    const request=new XMLHttpRequest();
    // request.open("GET","https://jsonplaceholder.typicode.com/todos");
    //取得不了本地的json。因为cros的缘故。必须在服务器上才能取得。
    request.open("GET","my_json.json");
    request.send();
    
    request.addEventListener("readystatechange",()=>{
        if(request.readyState===4 && request.status===200){
            // json is an array ,elements are object
            //this takes a json string and convert that json string into js object
            //when we write json ,everything have to be in double quote.number ok.
            //json里的最后一个元素没有逗号。
            const data=JSON.parse(request.responseText);
            callback(data,undefined);
            
        }else if(request.readyState===4){
            callback(undefined,"have no data");
            
        }
        
    });
}


getData((data,error)=>{
    if(error){
        console.log(error);
        
    }else{
        console.log(data);
        
    }
});

