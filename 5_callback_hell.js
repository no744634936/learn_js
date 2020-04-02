console.log("start");

loginUser=(email,password,callback)=>{
    setTimeout(()=>{
        callback({username:"zhang"});
    },5000);
}

getUserVideos=(username,callback)=>{
    setTimeout(()=>{
        callback(["video1","video2","video3"])
    });
}

const user=loginUser("zhang@gmail.com",12345,(user)=>{
    console.log(user);
    getUserVideos(user.name,(videos)=>{
        console.log(videos);
    });
});

console.log("end");


//这样的回调函数在多几个就很恐怖了。


//这还只是成功的时候的写法。如果还要添加错误处理。还得添加处理错误的回调函数
//就像下面的伪代码。

loginUser=(email,password,callbacksuccess,callbackfailuser)=>{

    if(success){
        setTimeout(()=>{
            callbacksuccess({username:"zhang"});
        },5000);
    }else{
        callbackfailuser("a big error")
    }

}