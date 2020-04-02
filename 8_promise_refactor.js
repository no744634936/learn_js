console.log("start");


//返回promise的方法，不需要有回调函数作为参数
loginUser=(email,password)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({username:"zhang"});
        },5000);
    });

}

getUserVideos=(username)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["video1","video2","video3"])
        });
    })

}

// const user=loginUser("zhang@gmail.com",12345,(user)=>{
//     console.log(user);
//     getUserVideos(user.name,(videos)=>{
//         console.log(videos);
//     });
// });

//when we use api to fetch data ,the request will return a promise automatically
loginUser("zhang@gmail.com",12345)
.then((user)=>{
    console.log(user);
    getUserVideos(user.name).then(arr=>{console.log(arr[0]);})
})
console.log("end");






//这种写法也是正确的，
loginUser("zhang@gmail.com",12345)
.then(user=>getUserVideos(user.name))
.then(arr=>console.log(arr[0]));


//这种写法是错误的，加了个大括号就错了。
loginUser("zhang@gmail.com",12345)
.then(user=>{getUserVideos(user.name)})
.then(arr=>console.log(arr[0]));