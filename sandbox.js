const request=new XMLHttpRequest();
//first argument is the type of request
//second argument is the endpoint url
request.open("GET","https://jsonplaceholder.typicode.com/todos/");
request.send();

//console --- Network ---- todos/----response 可以查看get到的数据。

//每当readyState 发生改变这个方法就会触发。
request.addEventListener("readystatechange",()=>{
    // console.log(request,request.readyState);
    if(request.readyState===4 && request.status===200){
        console.log(request.responseText);
        
    }else if(request.readyState===4){
        console.log("can not find data");
        
    }
    
})

// readstatechange 所有字母都小写。
// request.readyState  有5个数。0，1，2，3，4.
// 0	UNSENT	クライアントは作成済み。open() はまだ呼ばれていない。
// 1	OPENED	open() が呼び出し済み。
// 2	HEADERS_RECEIVED	send() が呼び出し済みで、ヘッダーとステータスが利用可能。
// 3	LOADING	ダウンロード中。responseText には部分データが入っている。
// 4	DONE	操作が完了した。


//只判断readyState===4是不够的。因为当endpoint url出错时，request.readyState会正常显示，但是却得不到数据。status显示为404
//这时就要多判断一步status ===200.表示一切正常